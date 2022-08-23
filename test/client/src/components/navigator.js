import React, {Component} from "react";

export default class Headers extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props.name = name;
    //     this.props.category = category;
    // }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props. category}</h2>
            </div>

            )
    }
}