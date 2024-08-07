// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentListComponent from './components/StudentListComponent';
import AddStudentComponent from './components/AddStudentComponent';
import EditStudentComponent from './components/EditStudentComponent';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<StudentListComponent />} />
                    <Route path="/add-student" element={<AddStudentComponent />} />
                    <Route path="/edit-student/:id" element={<EditStudentComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
