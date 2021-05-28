import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useParams } from "react-router";

import MainLayout from "./layout/MainLayout";
import Page404 from "./pages/404";
import About from "./pages/about";
import Account from "./pages/account";
import Auth from "./pages/auth";
import Blog from "./pages/blog";
import CheckOut from "./pages/checkout";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Product from "./pages/product";
import ShippingReturns from "./pages/shipping-and-returns";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shopping-cart";
import Store from "./pages/store";
// redux
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/auth" component={Auth} />
            <Route path="/faq" component={Faq} />
            <Route path="/product" component={Product} />
            <Route path="/shop" component={Shop} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/shipping-returns" component={ShippingReturns} />
            <Route path="/account/:slug" component={Account} />
            <Route path="/store-locator" component={Store} />
            <Route exact path="/" component={Home} />
            <Route path="/page-404" component={Page404} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
