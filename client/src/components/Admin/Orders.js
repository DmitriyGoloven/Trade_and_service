import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container, Modal} from "react-bootstrap";
import FormRegistry from "./FormRegistry";
import {useHttp} from "./hooks/http.hook";
import OrdersList from "./OrdersList";
import "./loader.css"
import {toast} from "react-toastify";

const Orders = () => {

    const navigate = useNavigate()
    const localUserID = localStorage.getItem("userToken")
    useEffect(() => {
        if (!localUserID)
            navigate('/auth');
    }, [localUserID, navigate])

    const {loading, error, request, clearError} = useHttp()

    const [orders, setOrders] = useState([])
    const [show, setShow] = useState(false)

    const HandleClose = () => setShow(false)
    const HandleShow = () => setShow(true)

    const services = useCallback(async () => {
        try {
            const data = await request("/api/orders/services", "POST",null,{
                Authorization: `Bearer ${localUserID}`
            })

            if (data.message) {
                toast.info(data.message)
            }
            setOrders(data)

        } catch (e) { console.log(e)
        }

    }, [request,localUserID])

    const deleteOrder = useCallback(async (id) => {
        try {
            await request("/api/orders/delete", "POST", {id})
            services().then()
        } catch (e) {
        }
    }, [request, services])


    const logout = useCallback(() => {
        localStorage.removeItem("userToken")
        localStorage.removeItem("userId")
        navigate('/auth')
    }, [navigate])

    const HandleRefresh = useCallback(() => {
        services().then()
    }, [services])

    useEffect(() => {

        if (error) {
            toast.error(`${error}`)
            clearError()
        }
        services().then()
    }, [error, clearError, services])


    return (

        <Container>
            <h2>Orders</h2>
            {loading ? <div className="loader">Loading...</div> :
                <OrdersList orders={orders} deleteOrder={deleteOrder}/>}
            <div style={{textAlign: "center", padding: "10px"}}>
                <Button
                    onClick={logout}
                    variant="danger"
                >
                    logout
                </Button>
                <Button
                    onClick={HandleShow}
                    variant="primary"
                >
                    New user registration
                </Button>
                <Button
                    onClick={HandleRefresh}
                    variant="secondary"
                >
                    Refresh
                </Button>
            </div>
            <Modal show={show} onHide={HandleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <FormRegistry/>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Orders;