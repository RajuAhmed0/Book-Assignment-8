import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Page/Home/Home";
import BookDetails from "../Page/BookDetails/BookDetails";
import ListedBooks from "../Page/ListedBook/ListedBook";






export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/books/:bookId",
                element:<BookDetails></BookDetails>,
                loader: () => fetch("books.json"),
              
            },
            {
                index: true,
                path: "/booksList",
                element: <ListedBooks></ListedBooks>,
              },

        ]
    }
]);