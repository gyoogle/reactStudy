import React, { Component } from 'react';

class Lec04_multiInput extends Component {

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
    
    render() {
        return (
            <div>
                react study event : 여러 input 만들기
                <br/>
                <input type="text" name="email_msg" placeholder="사용자명 입력하세요."
                onChange={this.handleTextBoxChange}/>
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

export default Lec04_multiInput;
