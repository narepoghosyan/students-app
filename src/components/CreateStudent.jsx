import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const payload = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "age": age
        }

        axios.post('http://localhost:3000/students', payload, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            navigate("/students");
        }).catch(error => {
            console.log('err', error);
        })
    }

    const formIsValid = firstName && lastName && email && password && age
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="First Name" value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
            }}/>
            <TextField label="Last Name" value={lastName} onChange={(e) => {
                setLastName(e.target.value)
            }}/>
            <TextField label="Email" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <TextField label="Password" type="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <TextField label="Age" type="number" value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <Button variant="contained" disabled={!formIsValid} onClick={handleSubmit}>Create</Button>
        </Box>
    );
}

export default CreateStudent;