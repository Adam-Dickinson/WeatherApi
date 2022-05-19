import React, {useState} from 'react';

import styles from './Form.module.css';
import { useState } from 'react';

const Form = () => {
    const [location, setlocation] = useState('')
    const onSubmit = e =>{
        e.preventDefault();
        if (!location || location === '') return;
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setlocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

export default Form;
