import MainLayout from "./layout/MainLayout";
import Page404 from "./pages/404";
import About from "./pages/about";
import Account from "./pages/account";
import AccountAddress from "./pages/account/components/AccountAddress";
import AccountInfo from "./pages/account/components/AccountInfo";
import AccountOrders from "./pages/account/components/AccountOrders";
import AccountPayment from "./pages/account/components/AccountPayment";
import AccountWishlist from "./pages/account/components/AccountWishlist";
import Auth from "./pages/auth";
import Blog from "./pages/blog";
import CheckOut from "./pages/checkout";
import ComingSoon from "./pages/coming-soon";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Product from "./pages/product";
import ShippingReturns from "./pages/shipping-and-returns";
import Shop from "./pages/shop";
import ShoppingCart from "./pages/shopping-cart";
import Store from "./pages/store";

let routes = [
  {
    component: MainLayout,
    routes:[
      {
        path:'/account',
        component: Account,
        auth: true,
        routes: [
          {
            path:'/account/address',
            component: AccountAddress
          },
          {
            path:'/account/info',
            component: AccountInfo
          },
          {
            path:'/account/payment',
            component: AccountPayment
          },
          {
            path:'/account/wishlist',
            component: AccountWishlist
          },
          {
            path:'/account/order',
            component: AccountOrders,
            exact:true,
          },
        ]
      }
      ,{
        path:'/about',
        component: About
      },
      {
        path:'/checkout',
        component: CheckOut
      },
      {
        path:'/contact',
        component: Contact
      },
      {
        path:'/blog',
        component: Blog
      },
      {
        path:'/auth',
        component: Auth
      },
      {
        path:'/faq',
        component: Faq
      },
      {
        path:'/product',
        component: Product
      },
      {
        path:'/shop',
        component: Shop
      },
      {
        path:'/shopping-cart',
        component: ShoppingCart
      },
      {
        path:'/shipping-returns',
        component: ShippingReturns
      },
      {
        path:'/account',
        component: Account
      },
      {
        path:'/store',
        component: Store
      },
      {
        path:'/',
        component: Home,
        exact: true,
      },
      {
        path:'/',
        component: Page404
      },
    ]
  },

  {
    path:'/coming-soon',
    component: ComingSoon
  },
    
  ]

  export default routes;
  
              /* <PrivateRoute path="/account" component={Account} /> */
              /* <Route path="/about" component={About} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/auth" component={Auth} />
              <Route path="/faq" component={Faq} />
              <Route path="/product" component={Product} />s
              <Route path="/shop" component={Shop} />
              <Route path="/shopping-cart" component={ShoppingCart} />
              <Route path="/shipping-returns" component={ShippingReturns} />
              <Route path="/store-locator" component={Store} />
              <Route exact path="/" component={Home} />
              <Route component={Page404} /> */