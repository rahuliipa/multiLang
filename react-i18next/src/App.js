import React from "react";
import { Trans, useTranslation } from "react-i18next";
//import {FormatedMessage} from 'react-intl';
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    document.cookie = "i18n_locale="+language;
  };

  return (
    <div className="App" style={{ marginTop: 15 }}>
      <h3>React i18next</h3>
      <button
        style={{ marginRight: "15px" }}
        onClick={() => changeLanguage("en")}
      >
        Emglish
      </button>
      <button
        style={{ marginRight: "15px" }}
        onClick={() => changeLanguage("de")}
      >
        Deutsche
      </button>
      <button
        style={{ marginRight: "15px" }}
        onClick={() => changeLanguage("zhs")}
      >
        简体中文
      </button>
      {/* Simplified */}
      <button onClick={() => changeLanguage("zht")}>中国传统</button>

      <hr />

      <hr />
      <div>{t("title1")}</div>
      <Trans i18nKey="title2">Title2 Language in HTML Content.</Trans>
      {/* <FormatedMessage id="app.title" defaultMessage="Title" /> */}
      

      <hr />
      <div>{t("description.part1")}</div>
      <Trans i18nKey="description.part2">
        part2 Switch for any button, testing languages are there.
      </Trans>
    </div>
  );
}

export default App;
