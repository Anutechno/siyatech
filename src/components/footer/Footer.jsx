import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import './footer.css';
import SecFooter from './SecFooter';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


export default function Footer() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <div>
        <section id='conatcat-info'>
          <div className='container'>
            <div className='row pt-5' data-aos="fade-up"
              data-aos-duration="3000">
              <div className='col-sm-6'>
                <div className='ft'>
                  <h2 Style='color: #213d65'>Have a question or need a custom quote?</h2>
                  <div className='confirm-div'></div>
                  <Form
                    id='subscribeform'
                    action='http://technorizen.com/company/home/subscribe'
                    role='form'
                    onsubmit=' return subscribeValidate()'
                    method='post'
                  >
                    <div className='input-group inp-sub-par col-md-12'>
                      <input type='text' name='semail' id='semail' placeholder='Your Email' className='form-control input-lg bor-inp' />
                      <div id='semail_error' className='error'></div>
                      <span className='input-group-btn'>
                        <button className='btn btn-info btn-lg submi-but' type='submit'>
                          Subscribe Now
                        </button>
                      </span>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id='bottom'>
          <div class='container wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='600ms'>
            <div class='row pt-5' data-aos="fade-up" data-aos-duration="3000">
              <div class='col-md-3 col-sm-6'>
                <div class='widget'>
                  <h3>OUR SERVICES</h3>
                  <ul>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/webServices'>Web Services</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/mobilityS'>Mobility Solution</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/businessA'>Business Analysis</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/responsiveS'>Responsive Solution</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/softwareT'>Software Testing</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/softwareD'>Software Development</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-md-3 col-sm-6'>
                <div class='widget'>
                  <h3>QUICK LINKS</h3>
                  <ul>
                    <li>
                      <a href='http://technorizen.com/company/'>Home</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/about'>About</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/services'>Services</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/portfolio'>Portfolio</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/career'>Career</a>
                    </li>
                    <li>
                      <a href='http://technorizen.com/company/Webcontroller/viewPage/contact'>Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-md-3 col-sm-6 info'>
                <div class='widget'>
                  <h3>CONTACT</h3>
                  <ul>
                    <li>
                      <p> 402, Sapphire House,Sapna Sangeeta Road, Indore (M.P.) 452002</p>
                    </li>
                    <li>
                      <p>
                        <i class='fa fa-phone'></i> &nbsp; 0731-4279840
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class='fa fa-mobile'></i> &nbsp; +91-7828407092
                      </p>
                    </li>
                    <li>
                      <p>
                        <i class='fa fa-envelope-o'></i> &nbsp; <a href='mailto:info@technorizen.com'>info@technorizen.com</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class='col-md-3 col-sm-6'>
                <div class='widget'>
                  <h3>Our Partners</h3>
                  <ul>
                    <li>
                      <a
                        href='https://in.godaddy.com/offers/default.aspx?tmskey=1dom_03&isc=goflin130&currencytype=INR&cvosrc=ppc.google.go+daddy&cvo_crid=153866832861&matchtype=e'
                        target='blank'
                      >
                        Go Daddy
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://www.bigrock.in/deals-on-domains?a_aid=4d2c643cb0d0a&location=IN&chan=ga_se_brgennew&ad=ga_se_brgennew&cmp=Bigrock_Generic(S)&kw=Big%2520rock&mt=e&adg=Bigrock_Exact&adid=88003821290&coupon=BCOM073F037A&gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVt2JNjuQMv2i_kgn3a6TJs3bhzSaDc2W4Ko-fnI6eEhoCUo7w_wcB'
                        target='blank'
                      >
                        Big Rock
                      </a>
                    </li>
                    <li>
                      <a
                        href='http://www.bluehost.in/web-hosting-offer?chan=ga_se_comp&ad=ga_se_comp&cmp=Competitors_(S)&kw=Hosting%20raja&mt=e&adg=Hosting_Raja&adid=102643814598&coupon=BHABCOMFR&a_aid=8a10h1801b&gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEV5l_15u4L4zSBTCoBuh3Xw_j8rF77Si8P1pQiLCYfPBoCOozw_wcB'
                        target='blank'
                      >
                        Hosting Raja
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://login.ccavenue.com/web/merchant-payment-gateway.do?command=navigateMerchantPaymentGateway&gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVJO0WV2FUbN4-QqA9GENsWli-vWunU-fqiCdakNYqGhoC7CLw_wcB'
                        target='blank'
                      >
                        CC Avenue
                      </a>
                    </li>
                    <li>
                      <Nav.Link href='#'>Ullamco</Nav.Link>
                    </li>
                    <li>
                      <a
                        href='https://www.payumoney.com/?utm_source=google&utm_medium=search&utm_term=payu%20money&utm_content=basic&utm_campaign=search_brand&keyword=payu%20money&matchtype=e&network=g&device=c&creative=106144760884&placement=&adposition=1t1&gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVRpFggm3-mtYmkmo4_z6aEQNtubWtXxfurCey5xWpohoCk-Tw_wcB'
                        target='blank'
                      >
                        Payu Money
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <SecFooter />
      </div>
    </>
  );
}
