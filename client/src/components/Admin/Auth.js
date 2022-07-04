import React, {useCallback, useEffect, useState} from 'react';
import {Form, Button, Container} from "react-bootstrap"
import {useHttp} from "./hooks/http.hook";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Auth = () => {

    const {loading, error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email: "", password: ""
    })

    const login = useCallback((jwtToken, id) => {
        localStorage.setItem("userToken", jwtToken)
        localStorage.setItem("userId", id)
    }, [])


    useEffect(() => {
        if (error) {
            toast.error(`${error}`)
            clearError()
        }
    }, [error, clearError])

    const navigate = useNavigate()
    const localUserID = localStorage.getItem("userToken")
    useEffect(() => {
        if (localUserID)
            navigate('/orders');
    }, [localUserID, navigate])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", {...form})
            login(data.token, data.userId)
            if (data.message) {
                toast.info(data.message)
            }
        } catch (e) {
        }
    }

    return (
        <div>
            <Container fluid={"sm"} style={{padding: "10% 15%"}}>
                <Form>
                    <h3>
                        Login to admin panel
                    </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name={"email"}
                            type="email"
                            placeholder="Enter email"
                            onChange={changeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name={"password"}
                            type="password"
                            placeholder="Password"
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Button
                        onClick={loginHandler}
                        variant="primary"
                        type="submit"
                        disabled={loading}
                    >
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Auth;