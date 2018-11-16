import React, { Component } from 'react';

class Lec05_keyEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email_msg : "",
            hpno_msg : ""
        };
    }

    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleKeyin = e => {
        if (e.key === "Enter"){
            this.processOne();
        }
    }

    processOne = () => {
        alert("엔터키 입력됨 ==> " + this.state.email_msg + this.state.hpno_msg);
    }

    render() {
        return (
            <div>
                react study event : Key event 만들기
                <br/>
                <input type="text" name="email_msg" placeholder="사용자명 입력하세요."
                onChange={this.handleTextBoxChange} onKeyPress={this.handleKeyin}/>
                <br/>
                <input type="text" name="hpno_msg" placeholder="사용자명 입력하세요."
                onChange={this.handleTextBoxChange}/>
                <br/>

                <span>
                    email_msg : {this.state.email_msg} <br/>
                    hpno_msg : {this.state.hpno_msg}
                </span>
            </div>
        );
    }
}

export default Lec05_keyEvent;
