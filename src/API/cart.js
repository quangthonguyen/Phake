import instance from "./axiosInstance";

const axiosGetCartListById = async (id) => {
  try {
    const res = await instance.get(`/cart/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosAddCart = async (data) => {
  try {
    console.log(data);
    const res = await instance.post(`/cart`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosCartItemChangeQuatity = async (data) => {
  try {
    const res = await instance.get(
      `/cart/changeQuatity/${data.id}&${data.quatity}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosRemoveCartItem = async (data) => {
  try {
    const res = await instance.delete(`/cart/${data}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export {
  axiosGetCartListById,
  axiosAddCart,
  axiosCartItemChangeQuatity,
  axiosRemoveCartItem,
};
