import React, { Component } from 'react';

class Stopwatch extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLive: false,
            curTime: 0,
            startTime: 0
        };
        this.timerId = 0;
    }

    componentWillMount() {
        // 마운트하기 바로 전
        this.timerId = setInterval( e => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        if( this.state.isLive) {
            const v = new Date().getTime();
            this.setState({curTime:v});
        }
    }

    handleClick = e => {
        //중지
        if(this.state.isLive) {
            this.setState({isLive:false});
            return;
        }

        //시작
        const v = new Date().getTime();
        this.setState = {
            isLive: true,
            curTime: v,
            startTime: v
        }
    }

    render() {
        let label = "START";
        if(this.state.isLive){
            label = "STOP";
        }
        return (
            <div>
                <h2>Hello React Study 4th</h2>
                <br/>
                {this.state.curTime - this.state.startTime}
                <br/>
                <button onClick={this.handleClick}>{label}</button>

            </div>
        );
    }
}

export default Stopwatch;
