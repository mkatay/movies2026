
import './App.css'
import { Header } from './components/Header'
import {Home} from './pages/Home'
import {Movies} from './pages/Movies'
import {TVShows} from './pages/TVShows'
import {SearchMedia} from './pages/SearchMedia'
import {NotFound} from './components/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router'

const myrouter=createBrowserRouter([
  {element:<Header/>,
    children:[
      {path:'/',element:<Home />},
      {path:'/movies',element:<Movies/>},
      {path:'/tv',element:<TVShows/>},
      {path:'/search',element:<SearchMedia/>},
      {path:'*',element:<NotFound />},
    ]
  }
])

function App() {


  return <RouterProvider router={myrouter}/>
}

export default App
