import axios from "axios";

const API_URL = "http://localhost:8080/api/admin";

const getNumberOfUsers = () => {
    return axios.get(API_URL + "/numberOfUsers");
}

const getNumberOfFolders = () => {
    return axios.get(API_URL + "/numberOfFolders");
}

const getNumberOfNotes = () => {
    return axios.get(API_URL + "/numberOfNotes");
}

const AdminService = {
    getNumberOfUsers,
    getNumberOfFolders,
    getNumberOfNotes
};

export default AdminService;
