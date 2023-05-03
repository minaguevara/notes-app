import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Note() {
    return (
        <div className='note'>
            <span>First Note</span>
            <div className='note-footer'>
                <small>Date</small>
                <MdDeleteForever/>
            </div>
        </div>
    )
}

export default Note;