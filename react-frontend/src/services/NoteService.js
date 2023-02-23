import axios from "axios";

const NOTE_API_BASE_URL = "http://localhost:8080/notes";

class NoteService {

    getNotes() {
        return axios.get(NOTE_API_BASE_URL);
    }
}

export default new NoteService();
