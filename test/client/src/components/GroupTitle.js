import React from "react";
import styles from "./GroupTitle.module.css"

class GroupTitle extends React.Component {
    render() {
        return (
          <main >
              <p className={styles.title}>Apollo</p>
              <p className={styles.label}>Running Short</p>
          </main>
        )
    }
};

export default GroupTitle;