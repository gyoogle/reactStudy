import React, { Component } from 'react';

class Lec06_lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("001 constructor() 생성자");
    }

    componentWillMount() {
        console.log("002 componentWillMount() 컴포넌트가 마운트 되기 전");
    }

    componentDidMount() {
        console.log("004 componentDidMount 컴포넌트가 마운트 된 후");
    }

    //업데이트
    componentWillReceiveProps(){
        console.log("005 componentWillReceiveProps() 디프리케이트 됨");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("006 shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("007 componentWillUpdate() 업데이트 전");
    }
    
    componentDidUpdate() {
        console.log("008 componentDidUpdate() 업데이트 후");
    }

    componentWillUnmount() {
        console.log("009 componentWillUnmount() 언마운트 전");
    }

    render() {
        console.log("003 render()");
        return (
            <div>
                123
            </div>
        );
    }
}

export default Lec06_lifecycle;
