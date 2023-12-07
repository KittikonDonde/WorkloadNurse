import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Template from './Template';

function Sidebar() {
    const [userName, setUserName] = useState();
    const [level, setLevel] = useState();*/

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            await axios.post(Config.api + '/apiUser/GetInfo', null, Config.headers()).then(res => {
                setUserName(res.data.name);
                setLevel(res.data.level);
            }).catch(err => {
                throw err.response.data;
            })
        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: e.message,
                icon: 'error'
            })
        }
    }

    return (
        <Template>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <Link to='/Home' class="brand-link">
                <img src="dist/img/124.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span class="brand-text font-weight-light">yaSuuu</span>
            </Link>

            <div class="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <a  className="col-md-6 col-md-offset-3"> </a>
                    </div>
                </div>
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-header">EXAMPLES</li>
                        <li class="nav-item">
                            <Link to="/Home" class="nav-link">
                                <i class="nav-icon fa fa-book "></i>
                                <p>Home</p>
                            </Link >
                        </li>
                        <li class="nav-item">
                            <Link to="/Product" class="nav-link">
                                <i class="nav-icon fa fa-book "></i>
                                <p>TEST</p>
                            </Link >
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        </Template>
    );
}

export default Sidebar;
