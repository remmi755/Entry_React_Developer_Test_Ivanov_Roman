import React from "react";
import styles from "./Modal.module.css"

class Modal extends React.PureComponent {
    render() {
        const {children, shown, close} = this.props

        return shown ? (
            <div
                className={styles.modalBackdrop}
                onClick={() => {
                    close()
                }}
            >
                <div
                    className={styles.modalContent}
                    onClick={e => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
        ) : null
    }
};

export default Modal;