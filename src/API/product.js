import instance from "./axiosInstance";

const axiosGetProductList = async (data) => {
  try {
    const { limit, currentPage, vendorId } = data;
    const res = await instance.get(
      `/products/vendorId=${vendorId}&limit=${limit}&currentPage=${currentPage}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosGetProductById = async (id) => {
  try {
    const res = await instance.get(`/products/id=${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosAddProduct = async (data) => {
  try {
    const res = await instance.post(`/products`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosSearchProduct = async (data) => {
  try {
    const { limit, currentPage, search } = data;
    const res = await instance.get(
      `/products/searchName=${search}&limit=${limit}&currentPage=${currentPage}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosGetProductByType = async (data) => {
  try {
    const { limit, currentPage, type, sort } = data;
    console.log("sort", { sort });
    const res = await instance.post(
      `/products/tag=${type}&limit=${limit}&currentPage=${currentPage}`,
      { sort },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return res.data;
  } catch (error) {
    return error;
  }
};

const axiosGetNewProduct = async (data) => {
  try {
    const res = await instance.get(`/products/newProduct`, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export {
  axiosGetProductList,
  axiosAddProduct,
  axiosGetProductById,
  axiosSearchProduct,
  axiosGetProductByType,
  axiosGetNewProduct,
};
