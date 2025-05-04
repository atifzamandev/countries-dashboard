# Next JS app to display country profile data

## Project overview

The purpose of this project is to display country profile data with the option to switch between different countries and metrics.

### Initial Project Setup

The project is created from scratch by installing the following packages/features which are being used to achieve the desired functionality and optimize app performance.

- Next JS 15: The project uses the latest version of Next.js to leverage SSR, SSG, and other powerful features for better performance.
- TypeScript: Adds type safety to the code and catches errors at compile time.
- Chakra UI: Used for styling the app and its components and build a responsive and accessible interface.
- GraphQL Client: Enables seamless API integration for fetching country lists and measure data from the provided endpoint.
- React Query: Manages server state, data fetching, caching, and synchronization in a simpler and more efficient way.
- Recharts: Rendering a line chart of measure data. It is more compatible with React due to its component-based structure compared to Chart.js, along with many other great features.

## Project Steps

### Initial project

Setup basic scaleable folder structure and clean up boilerplate to have clean code architecture. Installed related packages and configurations.

### API Setup

The GraphQL API was configured using GraphQL Client with queries. Implemented useCountries, useCountryMeasure custom hooks enabling reusable data access across components. The solution emphasizes separation of concerns principel isolating data logic from presentation components.

### DataChart

Created data chart component to display country demography based on default parameters. This provides the graphical data visualizations of API data. It is a responsive component to work on different screens.

### Country and Measure Selectors

Added interactive country and measure selectors to visualize demographic data (life expectancy, population, net migration rate) through dynamic charts.

### Refactoring

Performed some refactoring for better user experience

- Temporarily resolved client-server theme mismatch (requires proper Chakra UI theme configuration for permanent solution)
- Implemented loading spinner component for better UI display
- Refactored Dashboard from Home page for cleaner client-side rendering

### Not Implemented

- Used default or basic Chakra UI styling to focus on data visualization.
- Did not implement year range filters or additional data manipulation.
- Not implemented Chakra UI 3 properly due to time constraint.
- Used client-side fetching over SSR for simplicity and remain within the timebox.

### Future Tasks

- Implment Context API for better state management
- Implement Chakra UI theme and styling.
- Implement Chakra UI 3 components and their configurations.
- Improve chart display with tooltip and other features
- Display flag icons with the dropdown countries list.
- Further add error boundaries while fetching the data or displaying it.
- Error component for better error message display.
- Perform unit testing, component testing and e2e testing with React Testing Library and Cypress

************************** Project Completed **************************