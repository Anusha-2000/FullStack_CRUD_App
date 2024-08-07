// src/components/EditStudentComponent.js
import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import StudentService from '../services/StudentService';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudentComponent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        StudentService.getStudentById(id)
            .then(response => setStudent(response.data))
            .catch(error => console.error('There was an error!', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({ ...prevStudent, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        StudentService.updateStudent(id, student)
            .then(() => navigate('/'))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <Container>
            <h2>Edit Student</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={student.firstName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
};

export default EditStudentComponent;
