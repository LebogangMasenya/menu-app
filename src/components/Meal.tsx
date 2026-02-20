
import "../index.css"
export interface MealProp {
    name: string;
    price: number;
    type: 'beef' | 'chicken' | 'vegetarian' | 'vegan';
}

export default function Meal({ meal }: { meal: MealProp }) {
    return (
        <div className="meal">
            <h3>{meal.name}</h3>
            <i>Price: R{meal.price}</i>
            <p>Type: {meal.type}</p>
        </div>
    );
}