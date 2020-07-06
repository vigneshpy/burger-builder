import React from 'react';
import classes from './BuildControl.css'

const BuildCtrl = props=>(

    <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.addBtn}>More</button>
            <button className={classes.Less} onClick={props.rmvBtn} disabled={props.disabled}>Less</button>

    </div> 

)

export default BuildCtrl; 

