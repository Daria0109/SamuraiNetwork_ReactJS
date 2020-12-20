import classes from "../ProfileInfo.module.css";
import React from "react";

const Contact = ({name, address}) => {
  return <div className={classes.contact}>
    {name}: <span>{address}</span>
  </div>
}
export default Contact;