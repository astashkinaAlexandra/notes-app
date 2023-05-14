import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";

const getAllUsers = () => {
    return axios.get(API_URL + "/users");
}

const getPublicContent = () => {
    return axios.get(API_URL + "/test/all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "/test/user", {headers: authHeader()});
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "/test/mod", {headers: authHeader()});
};

const getAdminBoard = () => {
    return axios.get(API_URL + "/test/admin", {headers: authHeader()});
};

const UserService = {
    getAllUsers,
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default UserService;
