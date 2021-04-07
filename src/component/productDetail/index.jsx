import { throttle } from "lodash";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { asyncThunkAddCart } from "../../Redux/Slice/cart";
import { asyncThunkGetProductById } from "../../Redux/Slice/productDetail";
import ProductDetailUI from "./UI";

function ProductDetail() {
  const data = useSelector((state) => state.cart.data);
  const loading = useSelector((state) => state.productDetail.loading);
  const { id } = useParams();
  const productDetail = useSelector((state) => state.productDetail);
  const userId = useSelector((state) => state.user._id);

  const addloading = useSelector((state) => state.cart.addloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncThunkGetProductById(id));
  }, [dispatch, id]);
  const exitInCart = data.find((element) => element.product._id === id);
  const handleAddCart = useCallback(
    throttle((quatity) => {
      !exitInCart &&
        dispatch(
          asyncThunkAddCart({
            product: id,
            buyer: userId,
            quatity: quatity,
          })
        );
    }, 1000000),
    [dispatch, exitInCart, id, userId]
  );

  const handleAddCartwhiout = useCallback(
    (quatity) => {
      !exitInCart &&
        dispatch(
          asyncThunkAddCart({
            product: id,
            buyer: userId,
            quatity: quatity,
          })
        );
    },
    [dispatch]
  );

  return (
    <>
      <ProductDetailUI
        productDetail={productDetail}
        handleAddCart={userId ? handleAddCart : handleAddCartwhiout}
        exitInCart={!!exitInCart}
        addloading={addloading}
        loading={loading}
      />
    </>
  );
}

export default ProductDetail;
