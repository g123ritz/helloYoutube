import React from 'react'
import Head from './Components/Head' 
import Body from './Components/Body'
import "./App.css"
import { Provider } from 'react-redux'
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './Components/WatchPage'
import MainContainer from "./Components/MainContainer";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
const App = () => {
  return (
    <Provider store={store}>
    <div>
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App



