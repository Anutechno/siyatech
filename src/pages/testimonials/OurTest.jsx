import React from 'react'
import "./testimonial.css"

export const OurTest = (props) => {
  return (
    <>
    
    <section className="testimonial text-center">
        <div className="container">

            <div className="heading white-heading"data-aos={props.aos} data-aos-duration={props.aos_duration}>
                Testimonial
            </div>
            <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000" data-aos={props.aos} data-aos-duration={props.aos_duration}>
             
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="testimonial4_slide">
                            <img src="http://technorizen.com/company/uploads/images/Testimonials_IMG98522.png" className="img-circle img-responsive" alt=''/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 1</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src="http://technorizen.com/company/uploads/images/Testimonials_IMG98522.png" className="img-circle img-responsive" alt='' /><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 2</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial4_slide">
                            <img src="http://technorizen.com/company/uploads/images/Testimonials_IMG98522.png" className="img-circle img-responsive" alt='' />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client 3</h4>
                        </div>
                    </div>
                </div>
                <a className="hid carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className=" hid carousel-control-next" href="#testimonial4" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

    </>
  )
}
