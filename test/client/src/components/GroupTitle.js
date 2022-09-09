import React from "react";
import styles from "./GroupTitle.module.css"

class GroupTitle extends React.Component {
    render() {
        console.log(this.props)
        const {name, brand} = this.props
        // console.log(cartItem.name)

        return (
            <main>
                <p className={styles.title}>{name}</p>
                <p className={styles.label}>{brand}</p>
            </main>
        )
    }
};

export default GroupTitle;