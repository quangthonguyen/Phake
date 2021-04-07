import user from "./user";
import setting from "./setting";
import dialog from "./dialog";
import addProductDialog from "./addproductDialog";
import arrayProduct from "./arrayProduct";
import productDetail from "./productDetail";
import cart from "./cart";
import searchProduct from "./searchProduct";
import productbyType from "./productbyType";
import newProduct from "./newProduct";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user,
  setting,
  dialog,
  addProductDialog,
  arrayProduct,
  productDetail,
  cart,
  searchProduct,
  productbyType,
  newProduct,
});

export default rootReducer;
