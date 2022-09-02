import React from 'react';
import { FaRegHeart, FaRss, FaMapMarkerAlt, FaCogs } from 'react-icons/fa';
import './brif.css';

export default function AboutBrif(props) {
  return (
    <>
      <section className='about-breifing'>
        <div className='d-flex' >
          <div className='col-md-3 col-sm-6'>
            <div className='item media'>
              <div className='section-padding' data-aos={props.aos}
                data-aos-offset={props.aos_offset}
                data-aos-easing={props.aos_easing}>
                <div className='item-details media-body text-center'>
                  <div className='item-icon'>
                    <i className='fa fa-heart-o'></i>
                    <span>
                      {' '}
                      <FaRegHeart />
                    </span>
                  </div>
                  <div className='divider_wrap'>
                    {' '}
                    <span>
                      <i></i>
                    </span>
                  </div>
                  <div className='countdown'>
                    <span className='count-number counter'>8,236</span>
                  </div>
                  <span className='about-item'>Love Bites</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6'>
            <div className='item media'>
              <div className='section-padding' data-aos={props.aos}
                data-aos-offset={props.aos_offset}
                data-aos-easing={props.aos_easing}>
                <div className='item-details media-body text-center'>
                  <div className='item-icon'>
                    <i className='fa fa-rss'></i>
                    <FaRss />
                  </div>
                  <div className='divider_wrap'>
                    {' '}
                    <span>
                      <i></i>
                    </span>
                  </div>
                  <div className='countdown'>
                    <span className='count-number counter'>1,203</span>
                  </div>
                  <span className='about-item'>Wifi Zones</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6'>
            <div className='item media wow animated fadeInLeft' data-wow-delay='.75s'>
              <div className='section-padding' data-aos={props.aos}
                data-aos-offset={props.aos_offset}
                data-aos-easing={props.aos_easing}>
                <div className='item-details media-body text-center'>
                  <div className='item-icon'>
                    <i className='fa fa-map-marker'></i>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                  </div>
                  <div className='divider_wrap'>
                    {' '}
                    <span>
                      <i></i>
                    </span>
                  </div>
                  <div className='countdown'>
                    <span className='count-number counter'>3,679</span>
                  </div>
                  <span className='about-item'>Customer Centers</span>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-3 col-sm-6'>
            <div className='item media wow animated fadeInLeft' data-wow-delay='.95s'>
              <div className='section-padding' data-aos={props.aos}
                data-aos-offset={props.aos_offset}
                data-aos-easing={props.aos_easing}>
                <div className='item-details media-body text-center'>
                  <div className='item-icon'>
                    <i className='fa fa-cogs'></i>
                    <span>
                      <FaCogs />
                    </span>
                  </div>
                  <div className='divider_wrap'>
                    {' '}
                    <span>
                      <i></i>
                    </span>
                  </div>
                  <div className='countdown'>
                    <span className='count-number counter'>3,210</span>
                  </div>
                  <span className='about-item'>Mechanical Cogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
