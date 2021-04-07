import instance from "./axiosInstance";

const login = async (data) => {
  try {
    const res = await instance.post("/auth/logIn", data, {
      headers: { "Content-Type": "application/json" },
    });
    localStorage.setItem("token", res.headers.token);
    localStorage.setItem("acsesstoken", res.headers.acsesstoken);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const register = async (data) => {
  // delete data.confirmPassword;
  console.log({ data: data });
  try {
    const res = await instance.post("/auth/register", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log({ res: res });
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { login, register };
