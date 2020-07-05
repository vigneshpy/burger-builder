import React from "react";
import BuildControl from './BuildControl/BuildControl.js';
import classes from './BuildControls.css';
const controls = [
  { label: "Salad", types: "salad" },
  { label: "Meat", types: "meat" },
  { label: "Bacon", types: "bacon" },
  { label: "Cheese", types: "cheese" },
];

const BurgerCtrls = (props) => (
   <div className={classes.BuildControl}>
    {controls.map((ctrl) =>{
    return <BuildControl label={ctrl.label} key={ctrl.label} types={ctrl.types} />
    })}
  </div>
);
export default BurgerCtrls;
