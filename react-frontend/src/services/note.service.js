import axios from "axios"

const API_URL = "http://localhost:8080/api";

const getAllNotes = () => {
    return axios.get(API_URL + "/notes");
}

const getNotesByFolderId = (folderId) => {
    return axios.get(API_URL + `/folders/${folderId}/notes`);
}

const createNote = (folderId, note) => {
    return axios.post(API_URL + `/folders/${folderId}/notes`, note);
}

const updateNote = (noteId, note) => {
    return axios.put(API_URL + `/notes/${noteId}`, note);
}

const deleteNote = (noteId) => {
    return axios.delete(API_URL + `/notes/${noteId}`);
}

const deleteAllNotesOfFolder = (folderId) => {
    return axios.delete(API_URL + `/folders/${folderId}/notes`);
}

const NoteService = {
    getAllNotes,
    getNotesByFolderId,
    createNote,
    updateNote,
    deleteNote,
    deleteAllNotesOfFolder
}

// eslint-disable-next-line import/no-anonymous-default-export
export default NoteService;
