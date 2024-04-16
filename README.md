# Interactive Bookstore App
This project was bootstrapped with Create React App and Tailwind CSS.
```
npx create-react-app
npm install -D tailwindcss
npx tailwindcss init
```

## Functionalities for this App
- The main page has a book list showing book name, price, category and a delete button at the end for each book.
- Once you click the add a book button, a popup a page shown up, let the user add a book.
- The book is clickable. If the user clicks the book, it will show a popup page, letting the user be able to modify the book name, price, category and description.

## Technical features for this App
- Integrated Redux for global state management to handle the application's data flow.
- Utilizes Redux Toolkit to simplify store setup, reducers, and actions creation.
- TailwindCSS for styling, ensuring the application is responsive across different devices and screen sizes.
- Server-side rendering for faster page loads and improved SEO capabilities.
- Deployed on a public domain using platforms in Vultr.

## Component architecture
1. `BookList` Component: Serves as the main container for displaying the list of books.
2. `BooksListItem` Component: Displays individual book details in a row format.
3. `AddingForm` Component: Provides a UI for adding new books to the list.
4. `UpdatingForm` Component: Provides a UI for updating new books to the list.
5. `Button` and `Panel` Component: Reusable component from my previous project.

## Future improvements
1. Backend Integration. Integrating with a backend service using RESTful APIs with RTK Query for dynamic data fetching.
2. Transition to a Scalable Database. Considering a cloud-based SQL database like PostgreSQL or MySQL hosted on AWS RDS.
3. Advanced Search and Filtering. Enhancing the book discovery experience by allowing users to search and filter books.

## How to build
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## How to deploy
Copy the `out` folder to the remote server with the Nginx hosting and routing.
