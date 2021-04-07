import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormattedNumber } from "react-intl";
import { useHistory } from "react-router";
import QuatityInput from "../productDetail/quatityInput";

const useStyle = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(6, 0, 8.5, 0),
      padding: theme.spacing(0, 1),
    },
  },
  gridContainer: {
    padding: theme.spacing(2, 0),
  },
  tableCell: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  totalContext: {
    boxSizing: "border-box",
    position: "fixed",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "-webkit-fill-available",
    maxWidth: theme.breakpoints.values.lg,
    padding: theme.spacing(2),
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      bottom: theme.spacing(9),
    },
  },
}));

function CartUI(props) {
  const classes = useStyle();
  const history = useHistory();
  const { data, handleChangeQuatity, handleRemove } = props;
  const [selected, setselected] = useState([]);
  const toggleSelect = (event, id) => {
    setselected((state) => {
      if (state.findIndex((element) => element === id) !== -1) {
        return state.filter((element) => element !== id);
      } else {
        return [...state, id];
      }
    });
  };
  const removeSelect = (id) => {
    setselected((state) => state.filter((element) => element !== id));
  };
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(() => {
    settotalPrice(
      selected.length > 0
        ? selected.reduce((a, c) => {
            const item = data.find((element) => {
              return element._id === c;
            });
            return a + item.product.price * item.quatity;
          }, 0)
        : 0
    );
  }, [selected, data]);

  return (
    <>
      <Container maxWidth="lg" classes={{ root: classes.container }}>
        <Grid
          container
          classes={{ container: classes.gridContainer }}
          spacing={2}
        >
          <TableContainer component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="center">Đơn giá</TableCell>
                  <TableCell align="center">Số lượng</TableCell>
                  <TableCell align="center">Số tiền</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Hiện không có sản phẩm nào trong giỏ hàng !
                    </TableCell>
                  </TableRow>
                ) : (
                  data.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell padding="checkbox">
                        <Checkbox
                          onChange={(event) => toggleSelect(event, row._id)}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        classes={{ root: classes.tableCell }}
                        onClick={() =>
                          history.push(`/product/${row.product._id}`)
                        }
                      >
                        <Paper>
                          <Avatar
                            variant="square"
                            src={row.product.image[0]}
                          ></Avatar>
                        </Paper>
                        {row.product.productName}
                      </TableCell>
                      <TableCell align="center">
                        <FormattedNumber
                          value={row.product.price}
                          style="currency"
                          currency="VND"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <QuatityInput
                          value={row.quatity}
                          plusClick={() => {
                            handleChangeQuatity(
                              row._id,
                              row.quatity < row.product.stock
                                ? row.quatity + 1
                                : row.quatity,
                              index
                            );
                          }}
                          minuClick={() =>
                            handleChangeQuatity(
                              row._id,
                              row.quatity > 1 ? row.quatity - 1 : row.quatity,
                              index
                            )
                          }
                        />
                      </TableCell>
                      <TableCell align="center">
                        <FormattedNumber
                          value={row.product.price * row.quatity}
                          style="currency"
                          currency="VND"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          variant="contained"
                          disableElevation
                          onClick={() => {
                            handleRemove(row._id);
                            removeSelect(row._id);
                          }}
                        >
                          Xóa
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell align="right" colSpan={5}>
                    {""}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Grid>

        <Paper classes={{ root: classes.totalContext }} square elevation={3}>
          <Typography variant="body1">Tổng tiền hàng:</Typography>
          <Typography variant="h6" color="error">
            <FormattedNumber
              value={totalPrice}
              style="currency"
              currency="VND"
            />
          </Typography>
          <Button variant="contained" disableElevation color="secondary">
            Mua hàng
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export default CartUI;
