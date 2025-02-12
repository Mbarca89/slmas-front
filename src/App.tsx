import "./App.css"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { useState, useEffect, lazy, Suspense } from "react"
const Landing = lazy(() => import("./views/landing/Landing"))
// const Home = lazy(() => import("./views/home/Home"))
const NavBar = lazy(() => import("./Components/NavBar/NavBar"))
// const Users = lazy(() => import("./views/Users/Users"))
// const Products = lazy(() => import("./views/Products/Products"))
// const Providers = lazy(() => import("./views/Providers/Providers"))
// const Clients = lazy(() => import("./views/Clients/Clients"))

const App = () => {

  return (
    <div className="App align-items-center d-flex flex-column flex-grow-1 position-relative">
      <Routes>
        <Route element={(
          <>
            <NavBar />
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        )} >
        {/* <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/clients" element={<Clients />} /> */}
        <Route path="/" element={<Landing />} />
      </Route>
    </Routes>
    </div >
  )
}

export default App
