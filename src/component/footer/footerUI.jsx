import {
  AppBar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
const cskh = [
  "Các câu hỏi thường gặp",
  "Gửi yêu cầu hỗ trợ",
  "Hướng dẫn đặt hàng",
  "Phương thức vận chuyển",
  "Chính sách đổi trả",
  "Hướng dẫn trả góp",
  "Chính sách hàng nhập khẩu",
  "Hỗ trợ khách hàng: hotro@phake.vn",
  "Báo lỗi bảo mật: security@phake.vn",
];
const about = [
  "Giới thiệu Phake",
  "Tuyển Dụng",
  "Chính sách bảo mật thanh toán",
  "Chính sách bảo mật thông tin cá nhân",
  "Chính sách giải quyết khiếu nại",
  "Điều khoản sử dụng",
  "Giới thiệu Phake Xu",
  "Bán hàng doanh nghiệp",
];
const ht = ["Quy chế hoạt động Sàn GDTMĐT", "Bán hàng cùng Phake"];
const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(3.5),
  },
  appBar: {
    marginTop: theme.spacing(2),
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "0.8rem",
    fontWeight: 500,
  },
  sub: {
    fontSize: "0.75rem",
  },
  icon: {
    color: theme.palette.common.white,
  },
  adress: {
    padding: theme.spacing(1.5, 0, 0.5, 0),
  },
}));
function FooterUI() {
  const classes = useStyles();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <>
      {matches && (
        <AppBar position="static" className={classes.appBar}>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container>
              <Grid item xs>
                <List
                  component="nav"
                  dense={true}
                  subheader={
                    <ListSubheader component="div" disableSticky>
                      <Typography variant="subtitle1" className={classes.title}>
                        HỖ TRỢ KHÁCH HÀNG
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {cskh.map((e, i) => (
                    <ListItem key={i} className={classes.sub}>
                      {e}
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs>
                <List
                  component="nav"
                  dense={true}
                  subheader={
                    <ListSubheader component="div" disableSticky>
                      <Typography variant="subtitle1" className={classes.title}>
                        VỀ PHAKE
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {about.map((e, i) => (
                    <ListItem key={i} className={classes.sub}>
                      {e}
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs>
                <List
                  component="nav"
                  dense={true}
                  subheader={
                    <ListSubheader component="div" disableSticky>
                      <Typography variant="subtitle1" className={classes.title}>
                        HỢP TÁC VÀ LIÊN KẾT
                      </Typography>
                    </ListSubheader>
                  }
                >
                  {ht.map((e, i) => (
                    <ListItem key={i} className={classes.sub}>
                      {e}
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs>
                <List
                  component="nav"
                  dense={true}
                  subheader={
                    <ListSubheader component="div" disableSticky>
                      <Typography variant="subtitle1" className={classes.title}>
                        PHƯƠNG THỨC THANH TOÁN
                      </Typography>
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <Box display="flex" style={{ gap: "10px" }}>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg"
                        width="54"
                        alt=""
                      />
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg"
                        width="54"
                        alt=""
                      />
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg"
                        width="54"
                        alt=""
                      />
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box display="flex" style={{ gap: "10px" }}>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg"
                        width="54"
                        alt=""
                      />
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg"
                        width="54"
                        alt=""
                      />
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg"
                        width="54"
                        alt=""
                      />
                    </Box>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs>
                <List
                  component="nav"
                  dense={true}
                  subheader={
                    <ListSubheader component="div" disableSticky>
                      <Typography variant="subtitle1" className={classes.title}>
                        THEO DÕI CHÚNG TÔI TRÊN
                      </Typography>
                    </ListSubheader>
                  }
                >
                  <ListItem>
                    <ListItemIcon classes={{ root: classes.icon }}>
                      <Facebook />
                    </ListItemIcon>
                    <ListItemText primary="Facebook" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon classes={{ root: classes.icon }}>
                      <Instagram />
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Twitter classes={{ root: classes.icon }} />
                    </ListItemIcon>
                    <ListItemText primary="Twitter" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container justify="center" classes={{ root: classes.adress }}>
              <Grid item xs={7}>
                <Typography variant="subtitle1" className={classes.title}>
                  {"Địa chỉ văn phòng : "}
                  <span style={{ fontSize: "0.7rem", fontWeight: "100" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti illum dolore eaque earum odit est facere dolores
                    quae. Aliquid libero dolorum incidunt nobis quidem
                    laudantium tenetur quis obcaecati, nisi voluptatum!
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      )}
    </>
  );
}

export default FooterUI;
