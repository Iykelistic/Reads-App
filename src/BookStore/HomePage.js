import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = (props) => {
    return(
        <Link to='/'><button className="close-search" onClick={props.resetSearch}>close</button></Link>
    )
}
export default HomePage;