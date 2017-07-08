import React from 'react';
import NotesAddConnected from '../containers/NotesAdd';
import NotesListConnected from '../containers/NotesList';

const NotesRoute = () => (
    <div>
        <div>NotesRoute</div>
        <NotesAddConnected/>
        <NotesListConnected/>
    </div>
);
export default NotesRoute;