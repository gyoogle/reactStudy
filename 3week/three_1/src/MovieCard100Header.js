import React, { Component } from 'react';

class MovieCard100Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : '기본값'
        }
        setTimeout(() => {
            this.setState({username: '김규석'})
        }, 3000);
        
    }
    
    render() {
        return (
            <div>
                <h1>My Movie Chart</h1>
                <h3>{this.state.username} 회원님 환영합니다!</h3>
            </div>
        );
    }
}


export default MovieCard100Header;