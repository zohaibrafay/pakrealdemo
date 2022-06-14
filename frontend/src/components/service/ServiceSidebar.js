import React from 'react'
import { Link } from 'react-router-dom'

const ServiceSidebar = () => {
  return (
   
      <div className="calculatorsidebar-wrapper">
            <nav className="calculatorsidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/labor"><i className="fa fa-users"></i>Labor Register</Link>
                    </li>
                    
                    <li>
                        <Link to="/vehicle"><i className="fa fa-shopping-basket"></i>Vehicle Register</Link>
                    </li>

                    

                </ul>
            </nav>
        </div> 
  )
}

export default ServiceSidebar
