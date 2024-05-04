import React from 'react';
import styles from './App.module.css'
import UserList from './components/UserList/UserList';
function App() {

    return (
        <>
            <div className={styles['container']}>
                <UserList />
            </div>
        </>
    )
}

export default App