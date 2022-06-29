import React from 'react';
import {Container, Table} from "react-bootstrap";

const OrdersList = ({orders, deleteOrder}) => {

    return (
        <Container fluid>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Del</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order, index) => {
                    return (
                        <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>
                                <a style={{color: "white"}} href={`mailto: ${order.email}`}> {order.email}</a>
                            </td>
                            <td>{order.name}</td>
                            <td>
                                <a style={{color: "white"}} href={`tel:${order.phone}`}>{order.phone}</a>
                            </td>
                            <td>{order.service}</td>
                            <td>{order.date}</td>
                            <td onClick={() => {
                                deleteOrder(order._id)
                            }}
                                style={{textAlign: "center", cursor: "pointer"}}>X
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Container>
    );


};

export default OrdersList;