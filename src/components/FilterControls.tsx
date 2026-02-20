import MealList from "./MealList";
import * as mealFunctions from "../utils/menuFunc";
import { useState } from "react"; // needed such that react knows to rerender when there is a change in regular variables
import type { MealProp } from "./Meal"; 

export default function FilterControls({ meals }: { meals: MealProp[] }) {
    const [mealsList, setMealsList] = useState<MealProp[]>(meals); // how does prop arrays work???
    const [totalPrice, setTotalPrice] = useState<number>(0);


    return (
        <div className="filter-controls">
            <h2>Filter Meals</h2>
            <div className="controls-bar">

                <select className="menu-select" onChange={(e) => setMealsList(mealFunctions.filterMealsByType(meals, e.target.value as 'beef' | 'chicken' | 'vegetarian' | 'vegan'))}>
                    <option value="">Filter by Type</option>
                    <option value="beef">Beef</option>
                    <option value="chicken">Chicken</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                </select>

                <button className="price-btn" onClick={() => setTotalPrice(mealFunctions.calculateTotalPrice(mealsList))}>
                    Calculate Total Price
                </button>

                <select className="menu-select" onChange={(e) => setMealsList(mealFunctions.sortMealsbyPrice(mealsList, e.target.value === 'asc'))}>
                    <option value="asc">Sort by Price (Ascending)</option>
                    <option value="desc">Sort by Price (Descending)</option>
                </select>

            </div>

            <div className="results-section">
                <h3>Modified Meals:</h3>
                {mealsList ? (
                    <>
                        <MealList mealsLis={mealsList} />

                        <p className="total-badge">Total Price: R{totalPrice}</p>
                    </>
                ) : (<p>No meals to display. Please select a filter.</p>)}
            </div>
        </div>
    );
}