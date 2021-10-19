import React from "react";
import { Link } from 'react-router-dom' 
import './nav.css'
import { ImCalculator } from 'react-icons/im';
import { MdOutlineSwapVerticalCircle } from 'react-icons/md';



class TopNav extends React.Component{
    render(){
        return(
            <div className='header'>
                <Link to="/calc"><ImCalculator /> Calculator</Link>
                {'  '}
                <Link to="/converter"><MdOutlineSwapVerticalCircle /> Converter</Link>
            </div>
        )
    }
}
export default TopNav