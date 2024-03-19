import React from 'react';
import { useParams } from 'react-router-dom';
import './result.css'

function Result() {
    const { selectedResult } = useParams()

    return (
        <div className="container">
            <div className="boxResult">
                <img className='computedVote'src='../src/images/illustration-thank-you.svg' alt='Computed vote illustration' />
                <span>You selected {selectedResult} out of 5</span>
                <h1>Thank you!</h1>
                <p className='result'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    );
}

export default Result;