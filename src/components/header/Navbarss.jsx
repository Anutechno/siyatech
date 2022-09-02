import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './header.css';

export default function Navbarss() {
  return (
    <>
      <div className='fxd'>
        <nav className='navbar navbar-expand-lg bg-light naav-btm'>
          <div className='container-fluid'>
            <Nav.Link className='navbar-brand' href='#'>
              <img src='http://technorizen.com/company/images/logo.png' alt='' className='logo'/>
            </Nav.Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Nav.Link className='nav-link active' aria-current='page' href='#'>
                    About
                  </Nav.Link>
                </li>
                <li className='nav-item dropdown'>
                  <Nav.Link className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Services
                  </Nav.Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Web Services
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Mobility Solution
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Business analysis
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Responsive Solution
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Software Testing
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Software Development
                      </Nav.Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <Nav.Link className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Technology
                  </Nav.Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Mobile
                      </Nav.Link>
                    </li>
                    <li className='nav-item dropdown'>
                      <Nav.Link className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                        web
                      </Nav.Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            PHP Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            ROR Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            JAVA Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Angular JS Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Node JS Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Node JS Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            ASP.net web Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Microsoft DotNet <br /> Development
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Microsoft sharepoint
                          </Nav.Link>
                        </li>
                        <li>
                          <Nav.Link className='dropdown-item' href='#'>
                            Microsoft SQL Server
                          </Nav.Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        RIA
                      </Nav.Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item dropdown'>
                  <Nav.Link className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                    Solution
                  </Nav.Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        LMS Solutions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        HRMS Solutions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        CMS Solutions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        ERP Solutions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Banking and Finance <br /> Solutions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Health Care
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Event Management
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        E-commerce
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className='dropdown-item' href='#'>
                        Somethin
                      </Nav.Link>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <Nav.Link className='nav-link' href='#'>
                    Products
                  </Nav.Link>
                </li>
                <li className='nav-item'>
                  <Nav.Link className='nav-link' href='#'>
                    Gallery
                  </Nav.Link>
                </li>
                <li className='nav-item'>
                  <Nav.Link className='nav-link' href='#'>
                    Portfolio
                  </Nav.Link>
                </li>
                <li className='nav-item'>
                  <Nav.Link className='nav-link' href='#'>
                    Career
                  </Nav.Link>
                </li>
                <li className='nav-item'>
                  <Nav.Link className='nav-link' href='#'>
                    Contact Us
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
