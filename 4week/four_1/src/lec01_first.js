import React, { Component } from 'react';

class Lec01_firstHandler extends Component {
firstHandler(){
    alert("핸들러");
}
    render() {
        return (
            <div>
                react study event : first handler
                <br/>
                <br/>
                <button onClick={this.firstHandler}>이벤트 첫번째</button>
            </div>
        );
    }
}

export default Lec01_firstHandler;
