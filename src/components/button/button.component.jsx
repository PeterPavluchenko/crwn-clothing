import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  CartButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  cart: "button-cart",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.cart]: CartButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CutsomButton = getButton(buttonType);
  return <CutsomButton {...otherProps}>{children}</CutsomButton>;
};

export default Button;
