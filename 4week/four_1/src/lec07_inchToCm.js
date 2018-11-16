import React, { Component } from 'react';
import ValueInput from './lec07_ValueInput'

class InchToCm extends Component {
   constructor(props) {
       super(props)

       //하위 ValupInput 컴포넌트에 출력할 값 저장 state
       this.state = {
           inch: 0,
           cm: 0
       }
   }

   //인치가 변경될때
   inchChanged (e) {
       const inchValue = e.value
       const cmValue = inchValue * 2.54
       this.setState({
           inch: inchValue,
           cm: cmValue
       })
   }

   //센치가 변경될때
   cmChanged (e) {
       const cmValue = e.value
       const inchValue = cmValue / 2.54
       this.setState( {
           inch: inchValue,
           cm: cmValue
       })
   }

   render() {
       return (
           <div>
               <ValueInput title="inch" onChange={e => this.inchChanged(e)}
                           value={this.state.inch}  />

               <ValueInput title="cm" onChange={e => this.cmChanged(e)}
                           value={this.state.cm}  />
           </div>
       );
   }
}

export default InchToCm;