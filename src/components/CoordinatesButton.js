// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends Component {
    render(){
        // debugger
        // // create x and y array 
        // function createXYArray(x,y){
        //     return onReceiveCoordinates(x,y)
        // }
        // console.log(this.props)
        return (
            <button 
            onClick={(e) => this.props.onReceiveCoordinates([e.clientX,e.clientY])}
            

            >
            CoordinatesButton
            </button>
        )
    }
}