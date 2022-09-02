import React from 'react';
import AdCaro from './AdCaro';
import './admin.css';

export default function BestAdmin(props) {
  return (
    <>
      <div className=''>
        <section>
          <div className='text-center'data-aos={props.aos} data-aos-duration={props.aos_duration}>
            <h2 className='provide'>
              <span>Provide Best</span> Admin
            </h2>
            <div className='divider_wrap' Style='border-top: 1px solid #ffffff;'>
              {' '}
              <span>
                <i></i>
              </span>
            </div>
          </div>
          <div className='col-md-10 mx-auto py-4'data-aos={props.aos} data-aos-duration={props.aos_duration}>
            <AdCaro />
          </div>

          {/* <div className='container' Style='margin-bottom: 50px;'>
          <div id='myCarousel' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#myCarousel' data-slide-to='0' className='active'></li>
              <li data-target='#myCarousel' data-slide-to='1'></li>
              <li data-target='#myCarousel' data-slide-to='2'></li>
            </ol>

            <div
              className='carousel-inner'
              Style='height: 100%; border-radius: 20px;
    -webkit-box-shadow: 7px 5px 30px rgb(0 192 243 / 30%);
    box-shadow: 7px 5px 30px rgb(0 192 243 / 30%); border: 1px solid #ddd;'
            >
              <div className='item active'>
                <img src='http://technorizen.com/company/uploads/images/admin1.png' Style='width:100%;' alt='' />
              </div>

              <div className='item'>
                <img src='http://technorizen.com/company/uploads/images/admin2.png' Style='width:100%;' alt='' />
              </div>

              <div className='item'>
                <img src='http://technorizen.com/company/uploads/images/admin3.png' Style='width:100%;' alt='' />
              </div>

              <div className='item'>
                <img src='http://technorizen.com/company/uploads/images/admin4.png' Style='width:100%;' alt='' />
              </div>

              <div className='item'>
                <img src='http://technorizen.com/company/uploads/images/admin5.png' Style='width:100%;' alt='' />
              </div>

              <div className='item'>
                <img src='http://technorizen.com/company/uploads/images/admin6.png' Style='width:100%;' alt='' />
              </div>
            </div>

            <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
              <span className='fa fa-arrow-circle-o-left' Style='font-size:48px;color:#01c0f3'></span>

              <span className='sr-only'>Previous</span>
            </a>
            <a className='right carousel-control' href='#myCarousel' data-slide='next'>
              <span className='fa fa-arrow-circle-o-right' Style='font-size:48px;color:#01c0f3'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div> */}
        </section>
      </div>
    </>
  );
}
