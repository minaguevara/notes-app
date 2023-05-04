import { useState } from "react";
import { MdSave } from "react-icons/md";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 500;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        } 
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note new">
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <MdSave 
                    className='save-icon' 
                    size='1.3em'
                    onClick={handleSaveClick}/>
            </div>
        </div>
    );
}

export default AddNote