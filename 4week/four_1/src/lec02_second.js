import React, { Component } from 'react';

class Lec02_second extends Component {
    render() {
        return (
            <div>
                react study event : second handler(arrow)
                <br/>
                <br/>
                <input 
                    type="text"
                    onChange = {e => {
                        alert("리액트 이벤트 연습. 화살표 함수로" + e.target.value);
                    }}
                />
            </div>
        );
    }
}

export default Lec02_second;
