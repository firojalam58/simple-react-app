
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
        },
      ]
     },
  ])
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
