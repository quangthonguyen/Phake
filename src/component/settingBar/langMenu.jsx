import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import LangMenuUI from "./langMenuUI";
import { changeLang } from "../../Redux/Slice/setting";

function LangMenu() {
  const dispatch = useDispatch();
  const selectLang = useCallback(
    (lang) => {
      dispatch(changeLang(lang));
    },
    [dispatch]
  );

  return <LangMenuUI selectLangProp={selectLang} />;
}

export default LangMenu;
