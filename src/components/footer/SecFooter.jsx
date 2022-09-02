import React from 'react';
import './footer.css';
import Nav from 'react-bootstrap/Nav';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGooglePlusSquare } from 'react-icons/fa';

export default function SecFooter() {
  return (
    <>
      <div>
        <footer id='footer' className='midnight-blue'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <span>
                  &copy; 2021{' '}
                  <span id='flink' target='_blank' href='http://technorizen.com/company/' title='Technorizen Software Solutions'>
                    Technorizen Software Solutions
                  </span>
                  . All Rights Reserved.
                </span>
              </div>
              <div className='col-sm-6'>
                <div className='social'>
                  <ul className='social-share d-flex'>
                    <li>
                      <Nav.Link href='https://www.facebook.com/technorizen/' title='facebook' target='_blank'>
                        <spa>
                          <FaFacebookSquare />
                        </spa>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href='https://twitter.com/InfoTechnorizen' title='twitter' target='_blank'>
                        <span>
                          <FaTwitterSquare />
                        </span>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        href='https://www.linkedin.com/company/9234528?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A9234528%2Cidx%3A2-1-3%2CtarId%3A1478858372243%2Ctas%3Atechnorizen'
                        title='linkdin'
                        target='_blank'
                      >
                        <span>
                          <FaLinkedin />
                        </span>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href='https://plus.google.com/106801452428907684746' title='google plus' target='_blank'>
                        <span>
                          <FaGooglePlusSquare />
                        </span>
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
