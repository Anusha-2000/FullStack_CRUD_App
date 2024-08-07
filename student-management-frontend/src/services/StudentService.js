// src/services/StudentService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

const getStudents = () => {
    return axios.get(API_URL);
};

const getStudentById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createStudent = (student) => {
    return axios.post(API_URL, student);
};

const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/${id}`, student);
};

const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};
