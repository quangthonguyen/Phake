import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkGetNewProduct } from "../../Redux/Slice/newProduct";
import HomeUI from "./homeUI";

function HomePage() {
  const newProduct = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncThunkGetNewProduct());
  }, []);
  return (
    <>
      <HomeUI newProduct={newProduct} />
    </>
  );
}

export default HomePage;
