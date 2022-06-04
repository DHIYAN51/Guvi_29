import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import UserContext from './UserContext'
import axios from 'axios'
import swal from 'sweetalert';

const Users = () => {


    const [userData, setUsersData] = useState([])


    useEffect(() => {
        async function fetchData() {
            try {
                let users = await axios.get("https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users")
                setUsersData(users.data)
            } catch {
                console.log("error")
            }
        }
        fetchData();

    }, [])

    // fuction for delete data from table
    const deleteUser = (id) => {
        //prompt message for delete data
        swal({
            title: "This Data wants to delete",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(`https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users/${id}`)
                    .then(() => {
                        getData();
                    });

                swal(" Your file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Hope to safe!");
            }
        });
    };

    const getData = () => {
        axios
            .get(`https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users`)
            .then((getData) => {
                setUsersData(getData.data);
            });
    };





    const userContext = useContext(UserContext)

    return (
        <><div className="container-fluid">

            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-0 text-gray-800">Tables</h1>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.<br />
                    For more information about DataTables, please visit the <a target="_blank"
                        href="https://datatables.net">official DataTables documentation</a>.
                </p>
                <Link to={"/userscreate"} type="button" className="d-none d-sm-inline-block btn btn-xs btn-primary shadow-sm"> Create User</Link>
            </div>


            {/* <!-- DataTales Example --> */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Salary</th>
                                    <th className='text-center'>CRED</th>

                                </tr>
                            </thead>

                            <tbody>

                                {
                                    userData.map((data) => {
                                        return <tr>
                                            <td>{data.id}</td>
                                            <td>{data.Name}</td>
                                            <td>{data.Position}</td>
                                            <td>{data.Office}</td>
                                            <td>{data.Age}</td>
                                            <td>{data.Salary}</td>
                                            <td>
                                                <div className='text-center'>
                                                    <Link to={`/users-view/${data.id}`} type="button" className="btn btn-warning m-1">View</Link>
                                                    <Link to={`/users-edit/${data.id}`} type="button" className="btn btn-primary m-1">Edit</Link>
                                                    <button type="button" className="btn btn-danger m-1" onClick={() => deleteUser(data.id)}>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


        </>
    )
}

export default Users