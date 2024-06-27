import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Aboutuspage from "./pages/AboutUS/AboutUS";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import CartPage from "./pages/Cart/Cart";
import { Provider } from "react-redux";
import Appstore from "./Store.js/AppStore";
import Order from "./pages/Orders/order";
import Contactus from "./pages/Contactus/contactus";
import Signup from "./pages/Signup/Signup";
import { AuthProvider } from "./utils/authcontext";
import ProtectedRoute from "./pages/protectedRoute/PrortectedRoute";

function App() {
  return (
    // <AuthProvider>
    <Provider store={Appstore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutuspage />} />
            {/* <Route path="/discount" element= {<Category />} /> */}
            <Route
              path="/discount"
              element={<ProtectedRoute Component={Category} />}
            />
            {/* <Route path = "/cart" element = {<CartPage/>} /> */}
            <Route
              path="/cart"
              element={<ProtectedRoute Component={CartPage} />}
            />

            <Route path="/order" element={<Order />} />
            <Route path="/contact-us" element={<Contactus />} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // </AuthProvider>
  );
}

export default App;
