import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_vn from "./translations/vn/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping,
  react: { useSuspense: false },
  lng: "en",
  keySeparator: ".",
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    vn: {
      common: common_vn
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
