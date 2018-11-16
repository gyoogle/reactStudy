import React, { Component } from 'react';

class Lec03_method extends Component {

    constructor(props){
        super(props);
        this.state = {
            username:"",
            message:""
        };
    }

    handleBtnClick = () => {
        alert("임의메서드가 잘 회출되나");
        this.setState({
            username: "트와이스"
        });
        
    };

    handleTextBoxChange = e => {
        //alert("이벤트 핸들러를 화살표 함수로 만들었어요");
        this.setState({
            message: e.target.value
        });
    };
    

    render() {
        return (
            <div>
                react study event : 임의메서드로 빼기
                <br/>
                <br/>
                    <input type="text" onChange={this.handleTextBoxChange} />
                    <button onClick={this.handleBtnClick}> 이벤트 세번째</button>
                <br/>
                userName : {this.state.username} <br />
                message : {this.state.message}

            </div>
        );
    }
}

export default Lec03_method;
