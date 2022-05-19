import React, {useState} from 'react';

import styles from './Form.module.css';
import { useState } from 'react';

const Form = () => {
    
    const onSubmit = e =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
            />

            <button type="submit" className={styles.button} onClick={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};

export default Form;
