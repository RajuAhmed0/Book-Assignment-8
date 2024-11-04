import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Page/Home/Home";
import BookDetails from "../Page/BookDetails/BookDetails";
import ListedBooks from "../Page/ListedBook/ListedBook";
import ChartPage from "../Page/ChartPage/ChartPage";
import ErrorPage from "../Page/ErrorPage/ErrorPage";






export const route = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/books/:bookId",
                element: <BookDetails></BookDetails>,
                loader: () => fetch("books.json"),

            },
            {
                index: true,
                path: "/booksList",
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: "/pages",
                element:<ChartPage></ChartPage>,
              },

        ]
    }
]);