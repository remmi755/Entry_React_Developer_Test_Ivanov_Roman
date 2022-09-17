import React from "react";
import styles from "./Modal.module.css"

class Modal extends React.Component {
    render() {
        const{children, show, close} = this.props

        return  (
            show ? (
                <div
                    className={styles.modalBackdrop}
                onClick={() => {close()}}
                >
                    <div
                        className={styles.modalContent}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        {/*<button onClick={close}>Close</button>*/}
                        {children}
                    </div>
                </div>
                ) : null

        )
    }
};

export default Modal;