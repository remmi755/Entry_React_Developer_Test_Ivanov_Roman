import React from "react"
import styles from "./Attribute.module.css"

class Attribute extends React.Component {
    render() {
        const {el, id, index, attribute, activeAttributeId,activeAttributes, onSelectAttributes} = this.props
        return (
            <>
                <li key={id}
                    // onClick={() => onSelectAttributes(index, id)}
                    // onClick={() => this.onSelectAttributes(id)}
                    // onClick={() => console.log(index)}
                    className={`${styles.sizeItem}
                                         ${activeAttributes === index && activeAttributeId === id? styles.activeAttribute : ''}`}
                    style={{backgroundColor: el.value}}
                >
                    {/*{*/}
                    {/*    attribute.map((item,id) => (*/}
                    {/*        <li key={id}  onClick={() => onSelectAttributes(index, id)} >{item}</li>*/}
                    {/*    ))*/}
                    {/*}*/}
                    {/*{attribute.name === 'Color' ? '': el.value} {index} {id}*/}
                </li>
            </>
        )
    }
}

export default Attribute;