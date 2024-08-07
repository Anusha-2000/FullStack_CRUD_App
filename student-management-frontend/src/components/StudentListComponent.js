// src/components/StudentListComponent.js
import React, { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';

const StudentListComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        StudentService.getStudents()
            .then(response => setStudents(response.data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id)
            .then(() => setStudents(students.filter(student => student.id !== id)))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <Container>
            <h2>Student List</h2>
            <Link to="/add-student">
                <Button variant="primary" className="mb-3">Add Student</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/edit-student/${student.id}`}>
                                    <Button variant="warning" className="me-2">Edit</Button>
                                </Link>
                                <Button variant="danger" onClick={() => deleteStudent(student.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default StudentListComponent;
