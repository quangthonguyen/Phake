import Cart from "../component/cart";
import HomePage from "../component/Home";
import MyStore from "../component/myStore";
import ProductDetail from "../component/productDetail/index";
import ProductListByType from "../component/productListByType";

const routes = [
  { path: "/", component: <HomePage /> },
  { path: "/myStore", component: <MyStore /> },
  { path: "/product/:id", component: <ProductDetail /> },
  { path: "/cart", component: <Cart /> },
  {
    path: "/products/category/:type",
    component: <ProductListByType />,
  },
  {
    path: "/products/category/:type/:page/:sortBy",
    component: <ProductListByType />,
  },
];

export default routes;
