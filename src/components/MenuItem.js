import styles from "./MenuItem.module.css";
import React from "react";
let position = 1;

function MenuItem(props) {

  return (
    <div className={styles.item__container}>
      
      <div className={styles.price}>

        <div className={styles.item__wrapper}>
          <p className={styles.item__number}>{`${position++}`}</p>

          <div>
            <p className={styles.item__name}>
              {props.name}
            </p>
            <p className={styles.item__description}>
              {props.auxiliaryText}
            </p>
          </div>

        </div>

        <div className={styles[`item__wrapper--price`]}>
          <p className={styles.item__price}>{`${props.price.toFixed(2)}€`}</p>
        </div>
  
      </div>

    </div>
  );
};

export default MenuItem;