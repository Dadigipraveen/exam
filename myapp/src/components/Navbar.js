import React from 'react'


export default function Navbar() {

  return (
    <>



      <nav className="navbar navbar-expand-sm  ">
        <div className="container-fluid nav mb-0 ms-2">
        
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/your" >Your</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Navbar">All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/blocked" >Blocked</a>
              </li>
              </ul>
           
         
          </div>
        </div>
      </nav>



    </>
  )
}
