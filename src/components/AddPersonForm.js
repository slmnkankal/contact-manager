import React, {useState} from 'react'
import PeopleList from './PeopleList';
import './Style.css';

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

const AddPersonForm = () => {
    const [ person, setPerson ] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
        
    }

    function handleSubmit(e) {
        contacts.push(person)
        e.preventDefault();
        setPerson('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Add new contact'
                onChange={handleChange}
                value={person}/>
                <button type="submit">Add</button>
            </form>
            <PeopleList data={contacts}/>
        </div>
    )
};
export default AddPersonForm;