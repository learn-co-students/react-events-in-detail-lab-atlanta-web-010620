// Code DelayedButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {
    render(){
        return (
            <button
                onClick={ e => {
                    e.persist()
                    console.log(e)
                    setTimeout(() => {
                    // console.log(e)
                    // e.persist();
                    this.props.onDelayedClick(e)
                }, this.props.delay)}
            }
            >
                DelayedButton
            </button>
        )
    }
}