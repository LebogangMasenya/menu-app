
# Menu App

A small React + TypeScript app built to practice component composition and state updates by filtering and sorting meals.

## Goal

Learn how to:

- Break UI into reusable components.
- Pass props between components.
- Update and derive state for filtering and sorting.

## Features

- Display a list of meals with name, price, and type.
- Filter meals by type (beef, chicken, vegetarian, vegan).
- Sort meals by price (ascending/descending).
- Show total price for the current list.

## Tech Stack

- React
- TypeScript
- Vite

## Getting Started

1. Install dependencies:

	```bash
	npm install
	```

2. Start the dev server:

	```bash
	npm run dev
	```

## Project Structure

- src/components: UI components (Menu, Meal, MealList, FilterControls)
- src/utils: helper functions (filtering, sorting, totals)

## Screenshots
- Home view
![Menu](/src/assets/capture-1.png)
- Filtered meals
![Menu](/src/assets/capture-2.png)
- Sorted by price
![Menu](/src/assets/capture-3.png)

