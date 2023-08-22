import React, { useState } from 'react';

function SampleList({ id, deleteTodo}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState( `Office Task-${id}`); 
    const [description, setDescription] = useState('Default Description');

    const options = ['Completed', 'Not Completed'];

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className='sampletags'>
            {isEditing ? (
                <>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <h3>Name: {name}</h3>
                    <h3>Description: {description}</h3>
                </>
            )}

            <button onClick={() => setIsOpen(!isOpen)}>Status</button>
            {isOpen && (
                <div>
                    {options.map(option => (
                        <button key={option} onClick={() => console.log(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}

            

            <button id="green" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
            </button>
            <button id="red" onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    );
}

export default SampleList;
