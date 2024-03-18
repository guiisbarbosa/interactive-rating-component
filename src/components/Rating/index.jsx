import React, { useState } from 'react';
import './rating.css'
import { useNavigate } from 'react-router-dom';

function Rating() {
    const [selectedValue, setSelectedValue] = useState('')
    const navigate = useNavigate()

    function handleRedirect() {
        if(selectedValue === '') {
            alert('Select a note')
        } else {
            navigate(`/result/${selectedValue}`)
        }
    }

    return (
        <div className="container">
            <div className="box">
                <img className='starIcon' src="../src/images/icon-star.svg" alt="" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                <div className="btnsRate">
                    {[1, 2, 3, 4, 5].map(value => (
                        <div key={value}>
                            <input
                                type="radio"
                                id={`radio${value}`}
                                name="note"
                                value={value}
                                onChange={() => setSelectedValue(value)}
                            />
                            <label htmlFor={`radio${value}`} className='rate'>{value}</label>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={handleRedirect}>Submit</button>
            </div>
        </div>
    );
}

export default Rating;