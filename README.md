# Contact Management App with Charts and Maps

This is a contact management application featuring charts and maps, developed using React with TypeScript, TailwindCSS, React Router v6, and additional libraries. The application enables users to add new contacts, view a comprehensive list of all contacts, access detailed contact information, and perform editing and deletion functions. Additionally, it includes a straightforward dashboard showcasing a line graph illustrating case fluctuations, along with a React Leaflet map featuring markers indicating country names and corresponding statistics such as total active cases, recoveries, and deaths displayed in popups.

## Responsive React App

## Functionality

### Contacts Page

- A form to input new contact information
- A comprehensive list displaying all added contacts
- A button for accessing detailed contact information
- Functionality for editing and deleting contacts is integrated
- Redux serves as the storage solution for contact data

### Charts and Maps Page

- A line graph depicting fluctuations in cases.
- A React Leaflet map featuring markers displaying country names, along with the total number of active, recovered cases, and deaths in each country shown as popups.

## APIs Used

- World wide data of cases: https://disease.sh/v3/covid-19/all
- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## Libraries Used

- react-chartjs-2 for line chart
- react-leaflet and leaflet for world map
- react-redux for state management
- tailwind for styling
- TypeScript for type check
- Used React Hooks Functional Components.
- The useState hooks facilitate state changes in the Charts, while useHooks are employed to update the UI when fetching data.

## Deployment

For deployment, Vercel was utilized. Click the Description link to preview the deployment.

## Installation

1. Clone the repository: https://github.com/Atulraj0708/Taiyo-Assignment
2. Install dependencies: npm i

## Running the App

1. Start the development server: `yarn start` or `npm start`
2. Open your browser and go to `http://localhost:3000`

## Conclusion

This application serves as a straightforward contact management tool, complemented with charts and maps functionalities. Users can seamlessly add, view, edit, and delete contacts. Additionally, it features a dashboard presenting a line graph and a world map displaying COVID-19 cases data. The app is developed utilizing ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query, also known as TanstackQuery.
