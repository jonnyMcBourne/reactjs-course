import React from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value,increaseCounter}) => {
    return (
        <>
        <div>
           Counter:'{value}'
        </div>
        <button onClick={increaseCounter } > + 1 </button>
        </>
    )
}
CounterApp.prototypes={
    value: PropTypes.number.isRequired,
    increaseCounter: PropTypes.func.isRequired,
}