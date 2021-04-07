import React from "react";
import { IntlProvider } from "react-intl";
import messages from "./index";
import { useSelector } from "react-redux";
import flatten from "flat";

function FormatProvider(props) {
  const lang = useSelector((state) => state.setting.lang);
  return (
    <IntlProvider
      messages={flatten(messages[lang])}
      locale={lang}
      defaultLocale={"en"}
    >
      {props.children}
    </IntlProvider>
  );
}

export default FormatProvider;
