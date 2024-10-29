import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import PageLayout from "./pages/PageLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import BookingOrdersPage from "./pages/BookingOrdersPage.jsx";
import store from "./app/store.js";

import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/myorders" element={<BookingOrdersPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
