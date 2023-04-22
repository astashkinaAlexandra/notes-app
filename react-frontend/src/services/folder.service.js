import axios from "axios"

const API_URL = "http://localhost:8080/api";

const getFolders = () => {
    return axios.get(API_URL + "/folders");
}

const createFolder = (folder) => {
    return axios.post(API_URL + "/folders", folder);
}

const deleteFolder = (folderId) => {
    return axios.delete(API_URL + `/folders/${folderId}`);
}

const FolderService = {
    getFolders,
    createFolder,
    deleteFolder
}

// eslint-disable-next-line import/no-anonymous-default-export
export default FolderService;
