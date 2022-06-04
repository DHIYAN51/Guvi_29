import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router';




function Userview() {

  let navigate = useNavigate();
  let params = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://625bfd1cc9e78a8cb9b248ed.mockapi.io/admin/users/${params.id}`)
        setUser(response.data)
      } catch {
        console.log("data Error")
      }
    }
    fetchData();
  }, [])

  let handleClick = () => {
      navigate('/users')
  }
  return (
    <div>
      <h1 className='text-center text-dark'>Employee Details</h1>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped" id="dataTable" width="100%" cellSpacing="0">
            <thead className="text-center text-dark">
              <tr>
                <th className='h4'>Id</th>
                <th className='h4'>Name</th>
                <th className='h4'>Position</th>
                <th className='h4'>Office</th>
                <th className='h4'>Age</th>
                <th className='h4'>Salary</th>
              </tr>
            </thead>
            <tbody>
              <td className='text-center text-dark h3 text-capitalize'>{user.id}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.Name}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.Position}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.Office}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.Age}</td>
              <td className='text-center text-dark h3 text-capitalize'>{user.Salary}</td>
            </tbody>
          </table>
        </div>
        <button type="button" class="btn btn-primary"onClick={handleClick}>Return User</button>
         </div>
    </div>
  )
}

export default Userview