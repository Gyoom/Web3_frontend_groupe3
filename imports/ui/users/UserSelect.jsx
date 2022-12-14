// Dependancies :
import React from 'react';


export const UserSelect = ({ setUserSelected, users }) => {

    const handleChange = ( event ) => {
        setUserSelected(event.target.value);
    }

    return (
        <div id="subChatCategory">
            <h3>Choisissez un utilisateur : </h3>
             <select className="custom-select" onChange={(e) => handleChange(e)}>
                <option value="">-- please choose a user --</option>
                {users.map(user => <option key={user.username} value={user.username}>{user.username}</option>)}
            </select>
        </div>
    
    )
  }