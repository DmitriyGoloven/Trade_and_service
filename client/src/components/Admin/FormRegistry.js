import React, { useEffect, useState} from 'react';
import {Form, Button, Container} from "react-bootstrap"
import {useHttp} from "./hooks/http.hook";

const FormRegistry = () => {

    const {loading,error, request, clearError} = useHttp()

    const [form, setForm] = useState({
        email:"",password:""
    })

    useEffect(() => {
        if (error){
            alert(error)
            clearError()}
    }, [error, clearError])

    const changeHandler = event =>{
        setForm({...form,[event.target.name]:event.target.value})
    }

    const registerHandler = async ()=>{
        try{
            const data = await request("/api/auth/register","POST",{...form})
            if (data.message) {alert(data.message)
            }
        }catch (e){}
    }

    return (
        <div>
            <Container fluid={"sm"} style={{padding:"10% 5%"}}>
                <Form>
                    <Form.Label> <h3 >
                        Registering a new database user
                    </h3></Form.Label>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name={"email"}
                            type="email"
                            placeholder="Enter email"
                            onChange={changeHandler}
                        />

                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name={"password"}
                            type="password"
                            placeholder="Password"
                            onChange={changeHandler}
                        />
                    </Form.Group>

                    <Button
                        onClick={registerHandler}
                        variant="primary"
                        type="submit"
                        disabled={loading || !form.email || !form.password}
                    >
                        Register
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default FormRegistry;