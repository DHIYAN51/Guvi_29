import React, { useContext } from 'react'
import { useFormik } from 'formik';
import UserContext from './UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Createuser = () => {
    let navigate = useNavigate();

    const userContext=useContext(UserContext)
   
    const formik = useFormik({
        initialValues: {
            id:0,
            Name: "",
            Position: "",
            Office: "",
            Age: 0,
            Salary:0

        },
         validate: values => {
             const errors = {};
             
            if (!values.id) {
                errors.id = 'ID Please';
            }
            else if (!values.Name) {
                errors.Name = 'Enter the Name';
             }
             if (values.Name.length > 15) {
                errors.Name = 'Must be 15 characters or less';
            }

            if (!values.Position) {
                errors.Position = 'Job Role';
            }

            if (!values.Office) {
                errors.Office = 'Loction';
            }
            if (!values.Age || values.Age < 18) {
                errors.Age = 'Age should not be lesser than 18';
             }
             

            if (!values.Salary || values.Salary < 10000) {
                errors.Salary = 'Salary should not be lesser than 10000';
            }

            return errors;
        },
        onSubmit:async values => {
            try{            
               await axios.post("https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users", values)
                userContext.setUsers([...userContext.users, values])
            } catch(error) {
                console.log(error);
            }
            alert("form submitted")
                navigate('/users')

           
        },
    })
    return (
        
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>ID</label>
                        <input type={"text"} name="id" onChange={formik.handleChange}
                            value={formik.values.id} className="form-control" />
                        <span className='text-warning'> {formik.errors.id}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type={"text"} name="Name" onChange={formik.handleChange}
                            value={formik.values.Name} className="form-control" />
                        <span className='text-warning'> {formik.errors.Name}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input type={"text"} name="Position" onChange={formik.handleChange}
                            value={formik.values.Position} className="form-control" />
                        <span className='text-warning'>{formik.errors.Position}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Office</label>
                        <input type={"text"} name="Office" onChange={formik.handleChange}
                            value={formik.values.Office} className="form-control" />
                        <span className='text-warning'> {formik.errors.Office}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Age</label>
                        <input type={"number"} name="Age" onChange={formik.handleChange}
                            value={formik.values.Age} className="form-control" />
                        <span className='text-warning'> {formik.errors.Age}</span>
                    </div>
                    
                    <div className='col-lg-6'>
                        <label>Salary</label>
                        <input type={"number"} name="Salary" onChange={formik.handleChange}
                            value={formik.values.Salary} className="form-control" />
                       <span className='text-warning'> {formik.errors.Salary}</span>
                    </div>
                    <div className='col-lg-6'>
                        <input disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Createuser