import axios from "axios"

const API_URL = "http://localhost:8080/api";

const getFolders = () => {
    return axios.get(API_URL + "/folders");
}

const getFoldersByUserId = (userId) => {
    return axios.get(API_URL + `/users/${userId}/folders`);
}

const createFolder = (userId, folder) => {
    return axios.post(API_URL + `/users/${userId}/folders`, folder);
}

const deleteFolder = (folderId) => {
    return axios.delete(API_URL + `/folders/${folderId}`);
}

const FolderService = {
    getFolders,
    getFoldersByUserId,
    createFolder,
    deleteFolder
}

// eslint-disable-next-line import/no-anonymous-default-export
export default FolderService;
