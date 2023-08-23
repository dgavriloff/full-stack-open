import React from 'react';
import { useState } from 'react';
import { Counter } from './Counters.jsx'

const NewCounter = () => {
    console.log(date)
    let formSubmitted = false
    let operatingDate

    const handleSubmit = (event) => {
        event.preventDefault()
        
    }


    return(
        <div>
            {formSubmitted ? <Counter  /> : ''}
            <form >
                year:
                <input />
                month:
                <input />
                day:
                <input />
                <div type="submit" >click here</div>
            </form>    
        </div>
    )
}

export default NewCounter