# React CRUD App with MobX

This project is a **CRUD (Create, Read, Update, Delete)** application built using **React** for the frontend and **MobX** for state management. The app demonstrates how to manage state effectively in a React application using MobX stores and observables.

## Features

- **Create**: Add new items to the list.
- **Read**: View a list of items.
- **Update**: Edit existing items.
- **Delete**: Remove items from the list.
- **State Management**: Utilizes **MobX** to handle the state in a reactive and scalable way.

## Prerequisites

Ensure you have the following installed on your system before setting up the project:

- **Node.js** (v12 or higher)
- **npm** or **yarn**

## Getting Started

Follow the steps below to run this project locally.

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-mobx-crud-app.git
cd react-mobx-crud-app
```

### 2. Install dependencies:

```bash
Copy code
npm install
```

## or

```
yarn install
```

### 3. Start the application:

```
bash
npm start
```

## or

```
yarn start
```

The app will be available at http://localhost:3000.

## Project Structure

Here’s a brief explanation of the folder structure:

```
/src
 ├── /components        # Reusable UI components
 ├── /pages             # Pages used in routing (e.g., Home, EditPage, etc.)
 ├── /services          # External services (e.g., API calls)
 ├── /store             # MobX stores for managing app state
 ├── /utils             # Utility functions (e.g., formatting, helpers)
 ├── App.js             # Main App component
 ├── routes.js          # Application routes
 ├── firebaseConfig.js  # Firebase configuration (if using Firebase)
 ├── index.js           # Entry point for React
 └── ...
```

Key Files:

- App.js: Main component where routes and global state are managed.
- routes.js: Defines the different routes for the CRUD operations.
- store/: Contains MobX stores where the application state is managed.
- components/: Holds reusable UI components like forms, buttons, and lists.
- pages/: Contains the main pages such as Home, Create, Edit, and Details.
- utils/: Utility functions such as formatters or any custom helpers.

- State Management with MobX
  MobX is used for managing the state of the app. The state is centralized in MobX stores under the /store folder. Here's a quick overview of how it works:

- Store: The store holds the app’s state and actions for creating, reading, updating, and deleting items.
- Observable: The app uses observable to track changes in state, automatically updating components when the state changes.
- Actions: All mutations (like adding, editing, or deleting an item) are managed through actions defined in the MobX store.
- Reactions: Components use observer to react to state changes, ensuring a smooth and reactive UI experience.
- Running Tests
  The project is set up with basic test files. You can run the tests using:

```
npm test
```

## or

```
yarn test
```

## Styling

The project uses Tailwind CSS for styling. The configuration file for Tailwind can be found at tailwind.config.js.

### How to customize Tailwind CSS:

- Edit tailwind.config.js to add custom styles or themes.
  Make sure to import Tailwind styles in index.css or relevant component files.
- Future Improvements
  Add a user authentication feature (e.g., Firebase Authentication).
  Implement better error handling and form validation.
  Add unit and integration tests for more comprehensive coverage.

# License

This project is open-source and available under the MIT License.
