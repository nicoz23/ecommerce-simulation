import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Checkout from "./pages/Checkout"
import AllProducts from "./pages/AllProducts"
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import { useState } from "react"


function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />}/>

        <Route
          path="/"
          element={
            <ProtectedRoute token={token}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute token={token}>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/all"
          element={
            <ProtectedRoute token={token}>
              <AllProducts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:item"
          element={
            <ProtectedRoute token={token}>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute token={token}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute token={token}>
              <Checkout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
