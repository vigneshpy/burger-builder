import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";
import Modal from '../BuildControls/BuildControl/BuildControl'
const controls = [
  { label: "Salad", types: "salad" },
  { label: "Meat", types: "meat" },
  { label: "Bacon", types: "bacon" },
  { label: "Cheese", types: "cheese" },
];

const BurgerCtrls = (props) => (
  <div className={classes.BuildControls}>
    <p>Price $ {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          addBtn={() => props.addBtn(ctrl.types)}
          rmvBtn={() => props.lessBtn(ctrl.types)}
          disabled={props.disabled[ctrl.types]}
        />
      );
    })}
    <button className={classes.OrderButton} onClick={props.order} disabled={!props.purchasable}>Order Now</button>
  </div>
);
export default BurgerCtrls;
