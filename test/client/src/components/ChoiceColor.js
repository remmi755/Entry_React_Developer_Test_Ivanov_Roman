import React from "react";
import styles from "./ChoiceColor.module.css"

class ChoiceColor extends React.Component {
    render() {
        return(
            <main className={styles.container}>
                <h5 className={styles.h5}>COLOR:</h5>
                <div className={styles.choiceColor}>
                    <div className={`${styles.choiceColorItem} ${styles.colorItem1}`}></div>
                    <div className={`${styles.choiceColorItem} ${styles.colorItem2}`}></div>
                    <div className={`${styles.choiceColorItem} ${styles.colorItem3}`}></div>
                </div>
            </main>
        )
    }
}

export default ChoiceColor;