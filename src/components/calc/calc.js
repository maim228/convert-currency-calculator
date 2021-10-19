import React from "react";
import Calculator from "awesome-react-calculator";
import './calc.css'

class Calc extends React.Component{
    render(){
        return(
            <div className='calculator'>
                <Calculator />
            </div>
        )
    }
}
export default Calc