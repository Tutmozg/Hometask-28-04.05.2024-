import React from 'react'
import { useState } from 'react'
import styles from './UserList.module.css'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
const UserList = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Ivan Ivanovich', avatar: img1, gender: 'men' },
        { id: 2, name: 'Lisa Ivanovna', avatar: img2, gender: 'women' },
        { id: 3, name: 'Vasiliy Vasiliyevich', avatar: img3, gender: 'men' },

    ]);
    const [newUserName, setNewUserName] = useState('')
    const [newUserAvatar, setNewUserAvatar] = useState('')
    const [newUserGender, setNewUserGender] = useState('')
    const addUser = () => {
        if (newUserName && newUserAvatar && newUserGender) {
            const newUser = {
                id: users.length + 1,
                name: newUserName,
                avatar: newUserAvatar,
                gender: newUserGender
            };

            setUsers([...users, newUser])
            setNewUserName('')
            setNewUserAvatar('')
            setNewUserGender('')
        }
    };





    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <>
            <div className={styles.addUserForm}>
                <input className="input1" type="text" placeholder="Enter name" value={newUserName} onChange={(el) => setNewUserName(el.target.value)} />
                <input className="input" type="text" placeholder="Enter avatar URL" value={newUserAvatar} onChange={(el) => setNewUserAvatar(el.target.value)} />
                <input className="input" type="text" placeholder="Enter Gender" value={newUserGender} onChange={(el) => setNewUserGender(el.target.value)} />
                <button onClick={addUser}>Add User</button>
            </div>

            {users.map(user => (
                <div className={styles.UserBlock} key={user.id} onClick={() => deleteUser(user.id)} >
                    <img className={styles.UserImg} src={user.avatar} alt={user.name} />

                    <div className={styles.UserInfo}>
                        <p>ID: {user.id}</p>
                        <p>Gender: {user.gender}</p>
                        <p>{user.name}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UserList