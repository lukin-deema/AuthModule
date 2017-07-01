import { connect } from 'react-redux'
import NotesList from '../components/NotesList';

const mapStateToProps = (state) => ({
    notes: state.notes
});


const NotesListConnect = connect(
    mapStateToProps
)(NotesList);

export default NotesListConnect;