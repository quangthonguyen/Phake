import React from 'react';
import {
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
  ListSubheader,
  Paper,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  PhoneAndroid,
  Tv,
  Headset,
  LaptopChromebook,
  CameraAlt,
  DirectionsBike,
  ImportContacts,
  SportsBasketball,
  Spa,
  Wc,
} from '@material-ui/icons';

const category = [
  {
    text: 'Điện thoại - Máy tính bảng',
    icon: <PhoneAndroid fontSize="small" />,
  },
  { text: 'Điện tử - Điện lạnh', icon: <Tv fontSize="small" /> },
  { text: 'Phụ kiện - Thiết bị số', icon: <Headset fontSize="small" /> },
  { text: 'Laptop - Thiết bị IT', icon: <LaptopChromebook fontSize="small" /> },
  { text: 'Máy ảnh - Quay phim', icon: <CameraAlt fontSize="small" /> },
  { text: 'Xe máy, ô tô, xe đạp', icon: <DirectionsBike fontSize="small" /> },
  { text: 'Thời trang - Phụ kiện', icon: <Wc fontSize="small" /> },
  { text: 'Thể thao - Đã ngoại', icon: <SportsBasketball fontSize="small" /> },
  { text: 'làm đẹp - Sức khỏe', icon: <Spa fontSize="small" /> },
  { text: 'Sách', icon: <ImportContacts fontSize="small" /> },
];

const useStyle = makeStyles((theme) => ({
  listIconRoot: {
    minWidth: theme.spacing(5),
  },
}));

function ListUI() {
  const classes = useStyle();
  return (
    <Paper>
      <List
        component="nav"
        dense={true}
        subheader={<ListSubheader component="div">Danh mục</ListSubheader>}
      >
        {category.map((v, i) => (
          <ListItem button key={i}>
            <ListItemIcon classes={{ root: classes.listIconRoot }}>
              {v.icon}
            </ListItemIcon>
            <ListItemText primary={<Typography>{v.text}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default ListUI;
