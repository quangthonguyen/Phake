import React from "react";
import {
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
  ListSubheader,
  makeStyles,
  Typography,
} from "@material-ui/core";
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
} from "@material-ui/icons";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

const category = [
  {
    text: (
      <FormattedMessage
        id="category.smartphoneTablet"
        defaultMessage="Smartphone - Tablet"
      />
    ),
    icon: <PhoneAndroid fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.electroniceRefrigeration"
        defaultMessage="Electronice - Refrigeration"
      />
    ),
    icon: <Tv fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.accessoriesDigitalequipment"
        defaultMessage="Accessories - Digital"
      />
    ),
    icon: <Headset fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage id="category.laptopPc" defaultMessage="Laptop - Pc" />
    ),
    icon: <LaptopChromebook fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.cameraFilm"
        defaultMessage="Camera - Film"
      />
    ),
    icon: <CameraAlt fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.motorcycleCarBike"
        defaultMessage="Motorcycle,car,bike"
      />
    ),
    icon: <DirectionsBike fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.fashionAccessories"
        defaultMessage="Fashion - Accessories"
      />
    ),
    icon: <Wc fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.sportsPicnic"
        defaultMessage="Sports - Picnic"
      />
    ),
    icon: <SportsBasketball fontSize="small" />,
  },
  {
    text: (
      <FormattedMessage
        id="category.beautyHealth"
        defaultMessage="Beauty - Health"
      />
    ),
    icon: <Spa fontSize="small" />,
  },
  {
    text: <FormattedMessage id="category.book" defaultMessage="Book" />,
    icon: <ImportContacts fontSize="small" />,
  },
];

const categoryText = [
  "??i???n tho???i - M??y t??nh b???ng",
  "??i???n t??? -Di???n l???nh",
  "Ph??? ki???n - Thi???t b??? s???",
  "Laptop - Thi???t b??? IT",
  "M??y ???nh - Quay phim",
  "Xe m??y, ?? t??, xe ?????p",
  "Th???i trang - Ph??? ki???n",
  "Th??? thao - D?? ngo???i",
  "l??m ?????p - S???c kh???e",
  "S??ch",
];

const useStyle = makeStyles((theme) => ({
  listIconRoot: {
    minWidth: theme.spacing(5),
  },
}));

function ListUI(props) {
  const { toggleCatagory } = props;
  const classes = useStyle();
  return (
    <>
      <List
        component="nav"
        dense={true}
        subheader={
          <ListSubheader component="div" disableSticky>
            <FormattedMessage id="category.title" defaultMessage="Category" />
          </ListSubheader>
        }
      >
        {category.map((v, i) => (
          <ListItem
            button
            key={i}
            component={NavLink}
            to={`/products/category/${categoryText[i]}`}
            onClick={toggleCatagory}
          >
            <ListItemIcon classes={{ root: classes.listIconRoot }}>
              {v.icon}
            </ListItemIcon>
            <ListItemText primary={<Typography>{v.text}</Typography>} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export { category, categoryText };
export default ListUI;
