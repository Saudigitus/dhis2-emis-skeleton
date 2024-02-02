import React from "react";
import styles from "./text.module.css";

interface TitleProps {
  label: string
}
function Title(props: TitleProps): React.ReactElement {
  const { label } = props;

  return <h6 className={styles.title}>{label}</h6>;
}

export default Title;
