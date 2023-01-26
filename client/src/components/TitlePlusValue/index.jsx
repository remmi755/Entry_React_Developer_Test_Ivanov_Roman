import React from "react";
import styles from "./TitlePlusValue.module.css";

class TitlePlusValue extends React.PureComponent {
  render() {
    const { classNameTitle, classNameValue, name, value, ...attrs } = this.props;

    return (
      <div className={styles.size}>
        <span className={classNameTitle}>{name}</span>
        <span className={classNameValue}>
          {value}
        </span>
      </div>
    );
  }
}

export default TitlePlusValue;
