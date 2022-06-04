import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router';



const Edit = () => {

    let navigate = useNavigate();
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            Name: "",
            Position: "",
            Office: "",
            Age: 0,
            StartDate: 0,
            Salary: 0

        },
        validate: values => {
            const errors = {};
            if (!values.Name) {
                errors.Name = 'Enter the Name';
            } else if (values.Name.length > 15) {
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
        onSubmit: async (values) => {
            await axios.put(`https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users/${params.id}`, values)
            alert("changes successed")
            navigate('/users')
        }

    })
    useEffect(() => {
        async function fetchData() {
            try {
                let user = await axios.get(`https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users/${params.id}`)
                formik.setValues(user.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [])


    return (

        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
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
                        <label>ID</label>
                        <input type={"text"} name="id" onChange={formik.handleChange}
                            value={formik.values.id} className="form-control" />
                        <span className='text-warning'> {formik.errors.id}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Salary</label>
                        <input type={"number"} name="Salary" onChange={formik.handleChange}
                            value={formik.values.Salary} className="form-control" />
                        <span className='text-warning'> {formik.errors.Salary}</span>
                    </div>
                    <div className='col-lg-6'>
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4"> Save changes</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit