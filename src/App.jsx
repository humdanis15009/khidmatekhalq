import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ZakatCalculator from "./components/ZakatCalculator";

const Home = lazy(() => import("./components/Home"));
const Tnc = lazy(() => import("./components/Tnc"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Contact = lazy(() => import("./components/Contact"));
const Faq = lazy(() => import("./components/Faq"));
const Privacy = lazy(() => import("./components/Privacy"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const Services = lazy(() => import("./components/Services"));
const Volunteer = lazy(() => import("./components/Volunteer"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "ZakatCalculator",
          element: <ZakatCalculator />,
        },
        {
          path: "Tnc",
          element: <Tnc />,
        },
        {
          path: "AboutUs",
          element: <AboutUs />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Faq",
          element: <Faq />,
        },
        {
          path: "Privacy",
          element: <Privacy />,
        },
        {
          path: "AdminDashboard",
          element: <AdminDashboard />,
        },
        {
          path: "Services",
          element: <Services />,
        },
        {
          path: "Volunteer",
          element: <Volunteer />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <img
              src="images/loading1.webp"
              alt="Loading..."
              className="lg:w-40 lg:h-40 w-24 h-24"
            />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
