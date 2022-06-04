import React from 'react'
import Dashboardelement from './dashboardelement'

const Dashboard = () => {
  
    let datas = [
        {
            earnings: "Earnings(Monthly)",
            salary: "$40000",
            icon: "calender",
            color: "blue"
        },
        {
            earnings: "Earnings(Annual)",
            salary: "$21500",
            icon: "doller",
            color: "green"
        },
        {
            earnings: "Task",
            percent: "50%",
            icon: "clipboard",
            color: "info",
            meter: "middle"
        },
        {
            earnings: "Pending Requests",
            salary: "18",
            icon: "comment",
            color: "yellow"
        },
    ]
    return (
        <>

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div className="row">
                {datas.map((data) => {
                    return < Dashboardelement value={data} />
                })}

            </div>




        </>
    )
}

export default Dashboard