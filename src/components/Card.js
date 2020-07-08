import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.picture}/>
                <span className="name">{this.props.firstName}{this.props.lastName}</span>
                <span className="email">{this.props.email}</span>
            </div>
        )
    }
}
