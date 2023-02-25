import axios from "axios";

const NOTE_API_BASE_URL = "http://localhost:8080/notes";

class NoteService {

    getNotes() {
        return axios.get(NOTE_API_BASE_URL);
    }

    createNote(note) {
        return axios.post(NOTE_API_BASE_URL, note);
    }

    deleteNote(noteId) {
        return axios.delete(NOTE_API_BASE_URL + '/' + noteId);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NoteService();
