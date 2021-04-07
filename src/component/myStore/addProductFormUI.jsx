import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CircularProgress,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addPoductSchema } from "../../yup/yup";
import CustomOutlinedInput from "../common/customOutlinedInput";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyle = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2.5, 0),
    maxWidth: 350,
  },
  submit: {
    margin: "8px 0px 4px 0px",
  },
  progress: {
    color: "inherit",
    position: "absolute",
  },
  button: {
    width: "fit-content",
  },
  formControl: {
    alignItems: "center",
    paddingBottom: theme.spacing(2),
  },
  formGroup: {
    width: "100%",
    display: "block",
  },
  formLabel: {
    paddingBottom: theme.spacing(2),
  },
}));

const category = [
  "Điện thoại - Máy tính bảng",
  "Điện tử -Diện lạnh",
  "Phụ kiện - Thiết bị số",
  "Laptop - Thiết bị IT",
  "Máy ảnh - Quay phim",
  "Xe máy, ô tô, xe đạp",
  "Thời trang - Phụ kiện",
  "Thể thao - Dã ngoại",
  "làm đẹp - Sức khỏe",
  "Sách",
];

function AddProductFormUI(props) {
  const { userid, loading, error, dispatchAddProduct } = props;
  const classes = useStyle();
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(addPoductSchema),
  });
  const onSubmit = (data) => {
    let image = [];
    for (let index = 1; index <= upload.length; index++) {
      if (data[`image${index}`] != "") {
        image.push(data[`image${index}`]);
      }
    }
    const product = {
      image: image,
      productName: data.productName,
      price: data.price,
      stock: data.stock,
      description: data.description,
      type: data.type,
      vendor: userid,
    };
    console.log(product);
    dispatchAddProduct(product);
  };

  const [upload, setupload] = useState(["image1"]);
  const addupload = () => {
    if (upload.length < 6) {
      setupload((state) => {
        return [...state, `image${state.length + 1}`];
      });
    }
  };
  React.useEffect(() => {
    register("description");
    register("type");
  }, [register]);

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <CustomOutlinedInput
          label="Product name"
          name="productName"
          inputRef={register}
          errors={errors.productName}
          disabled={loading}
        />
        <Grid
          container
          spacing={2}
          classes={{ container: classes.gridContainerBreadcrums }}
        >
          <Grid item xs={12} sm={6}>
            <CustomOutlinedInput
              label="Price"
              name="price"
              inputRef={register}
              errors={errors.price}
              disabled={loading}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomOutlinedInput
              label="Stock"
              name="stock"
              inputRef={register}
              errors={errors.stock}
              disabled={loading}
              type="number"
            />
          </Grid>
        </Grid>
        <FormControl
          size="small"
          margin="dense"
          variant="outlined"
          error={!!errors.type}
          disabled={loading}
          fullWidth
        >
          <InputLabel>Type</InputLabel>
          <Select
            label="Type"
            onChange={(event) => {
              setValue("type", event.target.value);
            }}
          >
            {category.map((v, i) => (
              <MenuItem key={i} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>
            {errors.type ? errors.type.message : " "}
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth={true} classes={{ root: classes.formControl }}>
          <FormLabel>URL image</FormLabel>
          <FormGroup classes={{ root: classes.formGroup }}>
            {upload.map((v, i) => (
              <CustomOutlinedInput
                key={i}
                label={v}
                name={v}
                inputRef={register}
                errors={errors[v]}
                disabled={loading}
              />
            ))}
          </FormGroup>
          <Button
            variant="contained"
            disableElevation
            maxWidth={false}
            classes={{ root: classes.button }}
            onClick={addupload}
          >
            Add more image
          </Button>
        </FormControl>

        <FormControl fullWidth={true} classes={{ root: classes.formControl }}>
          <FormLabel classes={{ root: classes.formLabel }}>
            {errors.description ? (
              <Typography variant="body" color="error">
                Description
              </Typography>
            ) : (
              "Description"
            )}
          </FormLabel>
          <FormGroup classes={{ root: classes.formGroup }}>
            <CKEditor
              editor={ClassicEditor}
              config={{
                toolbar: [
                  "heading",
                  "|",
                  "fontfamily",
                  "fontsize",
                  "|",
                  "alignment",
                  "|",
                  "fontColor",
                  "fontBackgroundColor",
                  "|",
                  "bold",
                  "italic",
                  "strikethrough",
                  "underline",
                  "subscript",
                  "superscript",
                  "|",
                  "link",
                  "|",
                  "outdent",
                  "indent",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "todoList",
                  "|",
                  "|",
                  "insertTable",
                  "|",
                  "blockQuote",
                  "|",
                  "undo",
                  "redo",
                ],
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setValue("description", data);
              }}
            />
            <Typography variant="caption" color="error">
              {errors.description ? errors.description.message : ""}
            </Typography>
          </FormGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          fullWidth
          className={classes.submit}
          type="submit"
          disabled={loading}
        >
          Create product
          {loading && (
            <CircularProgress size={24} classes={{ root: classes.progress }} />
          )}
        </Button>
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="error"
        >
          {error}
        </Typography>
      </form>
    </>
  );
}

export default AddProductFormUI;
