import type { MealProp } from '../components/Meal';

export function filterMealsByType(meals: MealProp[], type: 'beef' | 'chicken' | 'vegetarian' | 'vegan') {
    if (!type) return meals; 
    return meals.filter(meal => meal.type === type);
}

export function calculateTotalPrice(meals: MealProp[]) {
    return meals.reduce((total, meal) => total + meal.price, 0);
}

/*
In JavaScript, the .sort() method is destructive. 
This means it doesn't just return a sorted version of the array; 
it physically reorders the items in the original memory reference.

Immutability is needed in React to ensure that state changes are detected and components re-render correctly.
*/
export function sortMealsbyPrice(meals: MealProp[], ascending: boolean = true) {
    // spread operator creates a shallow copy of the meals array, allowing us to sort without mutating the original array.
    // we create a new array using the spread operator to avoid mutating the original meals array
    // shallow copy vs deep copy: https://stackoverflow.com/questions/122102/what-is-the-difference-between-a-shallow-copy-and-a-deep-copy-of-an-object
    return [...meals].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}