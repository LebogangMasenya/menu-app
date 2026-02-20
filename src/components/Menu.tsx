import type { MealProp } from "./Meal";
import "../index.css";
import FilterControls from "./FilterControls";

// have a list of meals and their prices
// be able to filter by beef or chicken or vegetarian etc
export default function Menu() {
    const currmeals: MealProp[] = [ // array of meal props??
        { name: 'Beef Burger', price: 50, type: 'beef' },
        { name: 'Chicken Burger', price: 45, type: 'chicken' },
        { name: 'Veggie Burger', price: 40, type: 'vegetarian' },
        { name: 'Vegan Burger', price: 55, type: 'vegan' },
        { name: 'Beef Steak', price: 100, type: 'beef' },
        { name: 'Chicken Wings', price: 60, type: 'chicken' },
        { name: 'Vegetarian Pasta', price: 70, type: 'vegetarian' },
        { name: 'Vegan Salad', price: 30, type: 'vegan' },
    ];

    return (
        <div className="menu">
            <h1>Menu</h1>
            <FilterControls meals={currmeals} />
        </div>
    );
}