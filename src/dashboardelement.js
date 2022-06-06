import React from 'react'

const Dashboardelement = (props) => {
  
     return (
        <div className="col-xl-3 col-md-6 mb-4">

            {/* for border color */}

            <div className={`${props.value.color === "blue" ? "card border-left-primary shadow h-100 py-2" : ""}
                ${props.value.color === "green" ? "card border-left-success shadow h-100 py-2" : ""}
                ${props.value.color === "info" ? "card border-left-info shadow h-100 py-2" : ""}
                    ${props.value.color === "yellow" ? "card border-left-warning shadow h-100 py-2" : ""}`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">

                            {/* for text content */}
                            <div className={`${props.value.color === "blue" ? "text-xs font-weight-bold text-primary text-uppercase mb-1" : ""}
                                    ${props.value.color === "green" ? "text-xs font-weight-bold text-success text-uppercase mb-1" : ""}
                                    ${props.value.color === "info" ? "text-xs font-weight-bold text-info text-uppercase mb-1" : ""}
                                    ${props.value.color === "yellow" ? "text-xs font-weight-bold text-warning text-uppercase mb-1" : ""}`}>
                                {props.value.earnings}</div>
                            <div className='h5 mb-0 font-weight-bold text-gray-800'>{props.value.percent}
                                {/* for progress */}
                                {props.value.meter === "middle" ? (
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{ width: "50%" }}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}</div>
                            {/* content */}
                            <div className="h5 mb-0 font-weight-bold text-gray-800 ">{props.value.salary}
                            </div>

                        </div>
                        {/* icons */}
                        <div className="col-auto">

                            <i className={`${props.value.icon === "calender" ? "fas fa-calendar fa-2x text-gray-300" : ""}
                                ${props.value.icon === "doller" ? "fas fa-dollar-sign fa-2x text-gray-300" : ""}
                                ${props.value.icon === "clipboard" ? "fas fa-clipboard-list fa-2x text-gray-300" : ""}
                                ${props.value.icon === "comment" ? "fas fa-calendar fa-2x text-gray-300" : ""}`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardelement