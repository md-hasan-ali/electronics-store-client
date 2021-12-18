import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [deletedCount, setDeletedCount] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/manageOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [deletedCount])
    console.log(manageOrders);
    // delete single order
    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure,You want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/singleOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
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

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Product is Approved')
                }
            })
    }

    return (
        <div>
            <div className='text-center py-4'>
                <h2>Manage All Orders</h2>
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
                        manageOrders.map((order, index) =>
                            <tbody key={order?._id}>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.Product_Name}</td>
                                    <td>{order?.Email_Name}</td>
                                    <td>
                                        <button className='btn btn-success'>{order?.status}</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(order._id)} className='btn btn-info me-2'>Update <i className="fas fa-edit"></i></button>
                                        <button onClick={() => handleDelete(order._id)} className='btn btn-danger'> Delete <i className="fas fa-trash-alt"></i></button>
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

export default ManageAllOrder;