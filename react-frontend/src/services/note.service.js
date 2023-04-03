import axios from "axios"

const API_URL = "http://localhost:8080/api";

class NoteService {
    getNotes() {
        return axios.get(API_URL + "/notes");
    }

    createNote(note) {
        return axios.post(API_URL + "/notes", note);
    }

    updateNote(noteId, note) {
        return axios.put(API_URL + `/notes/${noteId}`, note);
    }

    deleteNote(noteId) {
        return axios.delete(API_URL + `/notes/${noteId}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new NoteService();
