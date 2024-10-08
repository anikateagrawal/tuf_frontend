import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

function App() {

  const router=createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/internal",
    element:<Dashboard/>
  }
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
