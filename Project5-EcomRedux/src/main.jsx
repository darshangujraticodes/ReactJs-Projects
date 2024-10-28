import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PageLayout from "./pages/PageLayout.jsx";
import { ThemeProvider } from "./context/ThemeContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="" element={<HomePage />}></Route>
      <Route path="aboutus" element={<AboutUs />}></Route>
      <Route path="contact" element={<ContactPage />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* provider is of Redux state management */}
    <Provider store={store}>
      {/* theme provider is of context state management  */}
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
