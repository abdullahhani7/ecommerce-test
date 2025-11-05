import Logo from "@assets/svg/cart.svg?react";
import { getCartTotalQuantity } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";

import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCartTotalQuantity);

  return (
    <div className={basketContainer}>
      <Logo title="logo" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
