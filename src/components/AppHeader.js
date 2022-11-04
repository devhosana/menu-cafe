import styles from "./AppHeader.module.css";
import logo from "../../src/img/logo.png";

import React from "react";

function AppHeader() {
  return (
    <div className={styles.logo__container}>
      <img
        className={styles.logo__img}
        src={logo}
        alt={"Logotipo Quiosque Bar da Rainha"}
      >
      </img>
    </div>
  );
};

export default AppHeader;