import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null)
    useEffect(() => {
        fetch(`https://floating-atoll-84142.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [deletedCount, user.email])

    console.log(orders);
    // Delete Single Orders
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`https://floating-atoll-84142.herokuapp.com/orders?email=${user.email}&id=${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/josn'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeletedCount(true)
                    } else {
                        setDeletedCount(false)
                    }
                })
        }
    }
    return (
        <div>
            <div>
                <h2 className='text-center py-4 text-danger'>My Orders</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Products Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        orders.map((order, index) =>
                            <tbody key={order?._id}>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.Product_Name}</td>
                                    <td>{order?.Email_Name}</td>
                                    <td>
                                        <button className='btn btn-success'>{order?.status}</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(order?._id)} className='btn btn-danger'>Delete</button>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;