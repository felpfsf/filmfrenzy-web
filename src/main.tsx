import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import queryClient from './lib/queryClient'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Movies } from './pages/Movies'
import { NotFound } from './pages/NotFound'
import { Search } from './pages/Search'
import { TVShow } from './pages/TVShow'
import { TVShows } from './pages/TVShows'
import './styles/index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/movie/:movie_id/:movie_slug',
        element: <Movie />
      },
      {
        path: '/tvshows',
        element: <TVShows />
      },
      {
        path: '/tvshow/:tvshow_id/:tvshow_slug',
        element: <TVShow />
      },
      {
        path: '/search',
        element: <Search />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>
)
