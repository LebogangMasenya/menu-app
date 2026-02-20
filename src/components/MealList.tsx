import Meal from "./Meal";
import type { MealProp } from "./Meal";
import "../index.css";

export default function MealList({ mealsLis } : { mealsLis: MealProp[] }) {
    return (
        <div className="meal-list">
            {mealsLis.map((meal) => (
                <Meal key={meal.name} meal={meal} />
            ))}
        </div>
    );
}