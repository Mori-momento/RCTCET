import Navbar from "./components/Navbar";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Our_projects_page from "./components/Our_projects_page";
import { useEffect } from "react";

//pages

import Home from "./pages/Home"
import About from "./pages/About"
import HBC from "./pages/Hobby_based_clubs"
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/HBC' element={<HBC/>} />
    </Route>
  )
)

export default function App(blogs) {


  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/blogs')
    .then(res => {
      return res.json()
    })
    .then(data =>{
      console.log(data)
    })
  })
  return (
    <div className="max-h-max" >
    
        {/* <Navbar></Navbar> */}
        <RouterProvider router={router} />
      
    </div>
  );
}
