import React from 'react';
// import Radium from 'radium';

import styles from './Person.css';

const person = ( props ) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

// export default Radium(person);
export default person;