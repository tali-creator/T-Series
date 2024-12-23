import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layouts from "./Layouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/categories";
import Contact from "./pages/contact";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import Details from "./components/details";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import SignUp from "./pages/Signin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catergories" element={<Categories />} />
        <Route
          path="movies/:id"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route path="upload" element={<Upload />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
