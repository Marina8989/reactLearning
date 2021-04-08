import React from 'react';

function Main(props) {
    return (
        <div className='mainDiv'>
        <h1>Choose one option please</h1>
            <form className='form'>
                <input type='checklist' />
                <p>{props.answer.one}</p>

                <input type='checklist' />
                <p>{props.answer.two}</p>

                <input type='checklist' />
                <p>{props.answer.three}</p>

                <input type='checklist' />
                <p>{props.answer.four}</p>
            </form>
        </div>
    )
}

export default Main;