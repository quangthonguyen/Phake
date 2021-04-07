import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "Thông tin bắt buộc !",
    oneOf: "Password phải trùng !",
  },
  string: {
    min: "Tối thiểu ${min} ký tự !",
    max: "Tối đa ${max} ký tự !",
    email: "Email không hợp lệ !",
    oneOf: "Password phải trùng !",
  },
});

const registerSchema = yup.object().shape({
  firstName: yup.string().required().min(1).max(24),
  lastName: yup.string().required().min(1).max(24),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "Password bao gồm ký tự hoa, ký tự thường và số !"
    )
    .min(8)
    .max(24),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required(),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "Password bao gồm ký tự hoa, ký tự thường và số !"
    )
    .min(8)
    .max(24),
  password1: yup
    .string()
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      "Password bao gồm ký tự hoa, ký tự thường và số !"
    )
    .min(8)
    .max(24),
});

const addPoductSchema = yup.object().shape({
  productName: yup.string().required(),
  price: yup.number().required(),
  stock: yup.number().required(),
  type: yup.string().required(),
  description: yup.string().required(),
  image1: yup.string().url().required(),
  image2: yup.string().url(),
  image3: yup.string().url(),
  image4: yup.string().url(),
  image5: yup.string().url(),
  image6: yup.string().url(),
});

export { registerSchema, loginSchema, addPoductSchema };
