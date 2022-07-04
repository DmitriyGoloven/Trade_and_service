import React, {useEffect, useState} from 'react';
import {useHttp} from "../Admin/hooks/http.hook";
import {Button, Container, Form} from "react-bootstrap";
import {toast} from "react-toastify";


const FormService = ({HandleClose}) => {

    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: "", phone: "", service: "default", name: "", date: new Date().toLocaleString()
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const sandRequest = async () => {
        try {

            const data = await request("/api/orders/service", "POST", {...form})

            if (data.message) {
                toast.success(data.message)
            }
            if (data) {
                HandleClose()
            }

        } catch (e) {
        }
    }

    useEffect(() => {
        if (error) {
            toast.error(`${error}`);
            clearError()
        }
    }, [error, clearError])

    return (
        <div>
            <Container fluid={"sm"} style={{padding: "2% 5%"}}>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address*</Form.Label>
                        <Form.Control
                            name={"email"}
                            type="email"
                            placeholder="Enter email"
                            onChange={changeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone number*</Form.Label>
                        <Form.Control
                            name={"phone"}
                            type="tel"
                            placeholder="Phone"
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control style={{textTransform: "capitalize"}}
                                      name={"name"}
                                      type="text"
                                      placeholder="Name"
                                      onChange={changeHandler}
                        />
                    </Form.Group>
                    <Form.Label>Type of service</Form.Label>
                    <Form.Select name={"service"} onChange={changeHandler} aria-label="Default select example">
                        <option value="Other type of service">Other type of service</option>
                        <option value="Painting walls">Painting walls</option>
                        <option value="Repairing floors">Repairing floors</option>
                        <option value="Replacing doors">Replacing doors</option>
                        <option value="Replacing windows">Replacing windows</option>
                        <option value="Roof repair">Roof repair</option>
                        <option value="Plumbing work">Plumbing work</option>
                    </Form.Select>

                    <div className="d-grid gap-2" style={{padding: "25px 0"}}>
                        <Button
                            onClick={sandRequest}
                            variant="dark"
                            type="submit"
                            disabled={loading || !form.email || !form.phone || !form.name}
                        >
                            Submit a request
                        </Button>
                    </div>
                </Form>

            </Container>

        </div>
    );
};

export default FormService;