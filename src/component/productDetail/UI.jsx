import {
  Avatar,
  Breadcrumbs,
  Button,
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import {
  AddShoppingCart,
  CardTravel,
  Chat,
  Storefront,
} from "@material-ui/icons";
import { FormattedNumber } from "react-intl";
import SlickImageUI from "../slick/SlickImageUI";
import Image from "material-ui-image";
import QuatityInput from "./quatityInput";
import Skeleton from "@material-ui/lab/Skeleton";
import Footer from "../footer";

const useStyle = makeStyles((theme) => ({
  rootContaner: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(10),
    },
  },
  gridContainer: {
    padding: theme.spacing(2, 2),
  },
  gridContainerBreadcrums: {
    padding: theme.spacing(1, 4),
    "& img": {
      width: "100%",
    },
  },
  paperBreadcrums: {
    margin: theme.spacing(2, 0),
  },
  contentPrice: {
    boxSizing: "border-box",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4, 6),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      gap: "16px",
    },
  },
  customStockGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  customButonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    color: theme.palette.text.secordary,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  stockInput: {
    padding: "0px",
    minWidth: "130px",
    width: "min-content",
  },
  IconsStock: {
    padding: "7px",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "0px",
  },
  shopOwerImg: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  shopOwercontainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  shopOwerbutton: {
    display: "flex",
    gap: "10px",
  },
  progress: {
    color: "inherit",
    position: "absolute",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "0",
  },
  ContainerPaper: {
    width: "650px",
    minWidth: "320px",
  },
}));

function ProductDetailUI(props) {
  const {
    productDetail,
    handleAddCart,
    exitInCart,
    addloading,
    loading,
  } = props;
  const [StockValue, setStockValue] = useState(1);
  const plusStock = () => {
    setStockValue((state) => state + 1);
  };
  const minusStock = () => {
    setStockValue((state) => {
      if (state > 1) {
        return state - 1;
      }
      return 1;
    });
  };
  const [displayImg, setdisplayImg] = useState();
  const changeImg = (imgUrl) => {
    setdisplayImg(imgUrl);
  };
  const classes = useStyle();
  const [state, setState] = useState({ open: false, index: 0 });
  return (
    <>
      <Container maxWidth="lg" classes={{ root: classes.rootContaner }}>
        <Paper classes={{ root: classes.paperBreadcrums }}>
          <Grid
            container
            spacing={2}
            classes={{ container: classes.gridContainerBreadcrums }}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/">
                Home
              </Link>
              <Link
                color="inherit"
                href={`/products/category/${productDetail.type}`}
              >
                {productDetail.type}
              </Link>
              <Typography color="textPrimary">
                {productDetail.productName}
              </Typography>
            </Breadcrumbs>
          </Grid>
        </Paper>

        <Paper>
          <Grid
            container
            spacing={2}
            classes={{ container: classes.gridContainer }}
          >
            <Grid item xs={12} sm={4}>
              <Image
                src={loading || displayImg || productDetail.image[0]}
                onClick={() =>
                  setState({
                    open: true,
                    index: displayImg
                      ? productDetail.image.findIndex((e) => e === displayImg)
                      : 0,
                  })
                }
                aspectRatio={1 / 1}
              />
              <SlickImageUI
                changeImg={changeImg}
                image={productDetail.image}
                loading={loading}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <div class={classes.contentPrice}>
                <div>
                  {loading ? (
                    <>
                      <Skeleton variant="h5" height="51.2px" />
                    </>
                  ) : (
                    <>
                      <Typography variant="h5" component="h1">
                        {productDetail.productName}
                      </Typography>
                      <Typography variant="caption" component="h3">
                        Danh mục: {productDetail.type}
                      </Typography>
                    </>
                  )}
                </div>

                {loading ? (
                  <>
                    <Skeleton variant="h4" height="41.6px" />
                  </>
                ) : (
                  <Typography variant="h4" component="h2" color="error">
                    <FormattedNumber
                      value={productDetail.price}
                      style="currency"
                      currency="VND"
                    />
                  </Typography>
                )}

                <div class={classes.customStockGroup}>
                  <Typography variant="body1" component="h3">
                    Số lượng :
                  </Typography>
                  <QuatityInput
                    value={StockValue}
                    plusClick={plusStock}
                    minuClick={minusStock}
                  />
                  {/* <OutlinedInput
                    classes={{ root: classes.stockInput }}
                    inputProps={{
                      style: { textAlign: "center" },
                    }}
                    margin="dense"
                    value={StockValue}
                    startAdornment={
                      <InputAdornment position="start" onClick={minusStock}>
                        <IconButton classes={{ root: classes.IconsStock }}>
                          <Remove />
                        </IconButton>
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end" onClick={plusStock}>
                        <IconButton classes={{ root: classes.IconsStock }}>
                          <Add />
                        </IconButton>
                      </InputAdornment>
                    }
                  /> */}
                  <Typography variant="body1" component="h3">
                    {`còn ${productDetail.stock} sản phẩm`}
                  </Typography>
                </div>

                <div class={classes.customButonGroup}>
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<AddShoppingCart />}
                    disableElevation
                    disabled={exitInCart ? true : addloading}
                    onClick={() => handleAddCart(StockValue)}
                  >
                    {addloading && (
                      <CircularProgress
                        size={24}
                        classes={{ root: classes.progress }}
                      />
                    )}
                    {exitInCart ? "Đã ở trong giỏ hàng" : "Thêm vào giỏ hàng"}
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className={classes.button}
                    startIcon={<CardTravel />}
                    disableElevation
                  >
                    Mua ngay
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Paper>

        <Paper classes={{ root: classes.paperBreadcrums }}>
          <Grid
            container
            spacing={2}
            classes={{ container: classes.gridContainerBreadcrums }}
          >
            <div class={classes.shopOwercontainer}>
              <div>
                <Avatar
                  alt="avatar"
                  variant="square"
                  className={classes.shopOwerImg}
                >
                  {productDetail.vendor.firstName[0]}
                </Avatar>
              </div>
              <div>
                <Typography variant="body1" component="h3">
                  {`Người bán: ${productDetail.vendor.lastName} ${productDetail.vendor.firstName}`}
                </Typography>
                <div class={classes.shopOwerbutton}>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    startIcon={<Storefront />}
                    disableElevation
                  >
                    Xem shop
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    className={classes.button}
                    startIcon={<Chat />}
                    disableElevation
                  >
                    Chat
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Paper>

        <Paper classes={{ root: classes.paperBreadcrums }}>
          <Grid
            maxwidth="lg"
            container
            spacing={2}
            classes={{ container: classes.gridContainerBreadcrums }}
          >
            <Grid item xs={12}>
              <Typography variant="h6" component="h2">
                Mô tả sản phẩm
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <div
                dangerouslySetInnerHTML={{ __html: productDetail.description }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
      <Modal
        open={state.open}
        onClose={() => setState({ open: false })}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <Paper className={classes.ContainerPaper}>
          <SlickImageUI
            changeImg={changeImg}
            image={productDetail.image}
            loading={loading}
            slidesToShow={1}
            initSlide={state.index}
          />
        </Paper>
      </Modal>
    </>
  );
}

export default ProductDetailUI;
