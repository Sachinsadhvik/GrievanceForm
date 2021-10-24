import React, { Component } from 'react'

export default class ChildProps extends Component {
    render() {
        
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
