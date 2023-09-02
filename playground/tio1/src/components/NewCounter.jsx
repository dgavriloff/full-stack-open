import React from 'react';
import { useState } from 'react';
import { Counter } from './Counters.jsx'
import { Header, Button } from './UIElements.jsx'

const NewCounter = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const currDate = new Date()
    const [endDate, setEndDate] = useState(new Date(0,0,0,currDate.getHours(), currDate.getMinutes(), currDate.getSeconds()));


    const handleSubmit = (e) => {
        e.preventDefault()


        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        setEndDate(new Date(parseInt(formJson.year), parseInt(formJson.month-1), parseInt(formJson.day), endDate.getHours(), endDate.getMinutes(), endDate.getSeconds()))
        setFormSubmitted(true);
        
    }


    return(
        <div>
            <Header text="Quick Tio"/>
            {formSubmitted ? <Counter  endDate={endDate}/> : ''}
            <form onSubmit={handleSubmit}>
                year:
                <input name="year"/>
                month:
                <input name="month"/>
                day:
                <input name="day"/>
                <hr />
                <button type="submit" >click here</button>
            </form>    
        </div>
    )
}

const DateInput = () => {

}

export default NewCounter