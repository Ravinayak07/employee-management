import React from 'react';

function Header({ setIsAdding }) {
    return (
        <header className='header_container'>
            <h1>Employee List</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='full-button'>Add Employee</button>
            </div>
        </header>
    )
}

export default Header