import React from 'react';

function Header(props) {
    return (
       <div className='header'>
           <h1>{props.header.name}</h1>
           <p>{props.header.about}</p>
           <ul>
               <li>{props.header.one}</li>
               <li>{props.header.two}</li>
           </ul>
       </div>
    )
}


export default Header;