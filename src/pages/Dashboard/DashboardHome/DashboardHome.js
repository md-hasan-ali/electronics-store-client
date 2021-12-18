import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './dashboardHome.css';

const DashboardHome = () => {
    return (
        <div className='dashboard'>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <Link to='/'>
                    <button className='btn btn-success'> <i className="fas fa-home"></i> Back To Home</button>
                </Link>
            </div>

            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-3 m-0 p-0">
                        <div className="dashboard-menu">
                            <Link style={{ textDecoration: 'none' }} to='manageAllOrder'>
                                <button><i className="fas fa-archive pe-2"></i> Manage All Order</button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='addProduct'>
                                <button> <i className="far fa-plus-square pe-2"></i> Add New Product</button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='makeAdmin'>
                                <button><i className="fas fa-tasks pe-2"></i> Make Admin</button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='manageProduct'>
                                <button><i className="fas fa-people-arrows pe-2"></i> Manage All Product</button>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to='myOrders'>
                                <button> <i className="fas fa-book-reader"></i> My Orders</button>
                            </Link>

                            <Link style={{ textDecoration: 'none' }} to='payment'>
                                <button><i className="fab fa-amazon-pay"></i> Pay</button>
                            </Link>

                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="dashboar-content">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;