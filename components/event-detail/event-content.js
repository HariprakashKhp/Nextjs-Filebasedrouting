import React from "react";
import styles from "./event-content.module.css";

function EventContent(props) {
  return <section className={styles.content}>{props.children}</section>;
}

export default EventContent;
