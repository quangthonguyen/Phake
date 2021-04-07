import {
  Avatar,
  Button,
  CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { FormattedNumber } from "react-intl";
import { useHistory } from "react-router";
import ToolbarTableUI from "./toolbarTableUI";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  root: {},
}));

function CustomTableUI(props) {
  const history = useHistory();
  const classes = useStyles();
  const {
    pagination,
    dispatchChangePage,
    dispatchChangeRowsPerPage,
    data,
    loading,
    handletoggleAddProdcutDiaglog,
  } = props;
  const { limit, totalPage, currentPage } = pagination;
  return (
    <>
      <TableContainer component={Paper} classes={{ root: classes.root }}>
        <ToolbarTableUI
          handletoggleAddProdcutDiaglog={handletoggleAddProdcutDiaglog}
        />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Đơn giá</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow hover>
                <TableCell colSpan={6} align="center">
                  <CircularProgress size={24} />
                </TableCell>
              </TableRow>
            ) : (
              data.map((value, index) => (
                <TableRow key={index} hover>
                  <TableCell
                    component="th"
                    scope="row"
                    classes={{ root: classes.tableCell }}
                    onClick={() => history.push(`/product/${value._id}`)}
                  >
                    <Paper>
                      <Avatar variant="square" src={value.image[0]}></Avatar>
                    </Paper>
                    {value.productName}
                  </TableCell>
                  <TableCell align="right">{value.stock}</TableCell>
                  <TableCell align="right">
                    <FormattedNumber
                      value={value.price}
                      style="currency"
                      currency="VND"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Button disabled>Ẩn</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={limit * totalPage}
            rowsPerPage={limit}
            page={currentPage - 1}
            onChangePage={(event, page) => dispatchChangePage(page + 1)}
            onChangeRowsPerPage={(event) =>
              dispatchChangeRowsPerPage(event.target.value)
            }
          />
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomTableUI;
