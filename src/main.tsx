import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import queryClient from "./lib/queryClient";
import { Home } from "./pages/Home/Home";
import { Movie } from "./pages/Movie/Movie";
import { Movies } from "./pages/Movies/Movies";
import { NotFound } from "./pages/NotFound/NotFound";
import { Search } from "./pages/Search/Search";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { TVShow } from "./pages/TVShow/TVShow";
import { TVShows } from "./pages/TVShows/TVShows";
import "./styles/index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movie/:movie_id/:movie_slug",
        element: <Movie />,
      },
      {
        path: "/tvshows",
        element: <TVShows />,
      },
      {
        path: "/tvshow/:tvshow_id/:tvshow_slug",
        element: <TVShow />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
);
