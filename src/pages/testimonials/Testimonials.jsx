import React from 'react'
import { OurTest } from './OurTest'
import "./testimonial.css"

export const Testimonials = () => {
    return (
        <>
            <section id="testimonial" class="testimonial text-center" data-stellar-background-ratio="0.1" data-stellar-vertical-offset="0" Style={"background-position: 12% 7.5px; padding:0px;width:100%; float:left"}>
                <div class="pattern-overlay" Style={"background: url('http://technorizen.com/company/images/testimonial-background.jpg') no-repeat; background-size: cover; height: 452px;"}>
                    <div class="section-padding" Style="padding:0px;height: 452px;background: rgba(0, 0, 0, 0.38);">
                        <div class="container">
                            <div class="section-top wow animated fadeInUp" data-wow-delay=".5s">
                                <h2 class="section-title"><span>Our</span> Testimonials</h2>
                                <div class="divider_wrap"> <span><i></i></span></div>
                            </div>
                            <div><OurTest/></div>
                            {/* <div class="section-details wow animated fadeInUp" data-wow-delay=".5s">
                                <div id="testimonial-slider" class="testimonial-slider carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#testimonial-slider" data-slide-to="0" class='active'></li>
                                        <li data-target="#testimonial-slider" data-slide-to="1" ></li>
                                    </ol>
                                    <div class="carousel-inner" role="listbox" Style="height:auto">
                                        <div class="item active">
                                            <blockquote class="client-quote">
                                                <div class="single-photo-img"><img class="scale-with-grid" src="http://technorizen.com/company/uploads/images/Testimonials_IMG98522.png" alt="Michael Thomas" Style="width:90px;" /></div>
                                                <div class="author"><h5>Michael Thomas</h5><span class="company"></span></div>
                                                <i class="fa fa-quote-left highlight"></i>
                                                <span Style="color:#fff">The team is wonderful to work with, you don't feel that you are talking to someone outside your own team, they work very closely with us, understand our requirements, add value to our product in every stage. Its been more than 2 yrs that we have been associated with them, it feels like a family now!.</span>
                                                <i class="fa fa-quote-right highlight"></i>
                                            </blockquote>
                                        </div>
                                        <div class="item ">
                                            <blockquote class="client-quote">
                                                <div class="single-photo-img"><img class="scale-with-grid" src="http://technorizen.com/company/uploads/images/Testimonials_IMG18373.png" alt="Derrick Scott" Style="width:90px;" /></div>
                                                <div class="author"><h5>Derrick Scott</h5><span class="company"></span></div>
                                                <i class="fa fa-quote-left highlight"></i>
                                                <span Style="color:#fff">Technorizen Software Solution is a very strong team and very professional. Work very hard to meet and exceed the customers expectations - Quality work!.</span>
                                                <i class="fa fa-quote-right highlight"></i>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
