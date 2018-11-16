import React, { Component } from 'react';

//숫자입력컴포넌트
class ValueInput extends Component {
   constructor(props){
       super(props)
       this.state = {
           value : this.props.value
       }
   }

   //값이 변경되면
   handleChange (e) {
       const v = e.target.value
       const newValue = v.replace(/[^0-9.]+/g,'')
       this.setState({
           value: newValue
       })

       if(this.props.onChange) {
           this.props.onChange({
               target: this,
               value: newValue
           })
       }
   }

   //프로퍼티가 변경되었을때
   componentWillReceiveProps(nextProps) {
       this.setState({
           value : nextProps.value
       })
   }

   render() {
       return (
           <div>
               <label>{this.props.title} : <br/>
                   <input type="text" value={this.state.value}
                          onChange={e => this.handleChange(e)} />
               </label>
           </div>
       );
   }
}

export default ValueInput;