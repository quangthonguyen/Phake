import {
  Button,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import React from "react";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../../i18n/constants";

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: "capitalize",
    margin: theme.spacing(0),
    padding: theme.spacing(0),
  },
}));

function LangMenuUI(prors) {
  const { selectLangProp } = prors;
  const classes = useStyle();
  const langArray = Object.keys(LOCALES);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const selectLang = async (lang, event) => {
    await handleClose(event);
    selectLangProp(lang);
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        size="small"
        classes={{ root: classes.button }}
        color="inherit"
      >
        <FormattedMessage
          id="settingBar.changeLanguage"
          defaultMessage="Change languaged"
        />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: "1" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {langArray.map((v, i) => {
                    return (
                      <MenuItem
                        onClick={(event) => {
                          selectLang(LOCALES[v], event);
                        }}
                        key={i}
                      >
                        {v}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default LangMenuUI;
