import React from 'react';
import Serve from '../feature/Serve';
import './skill.css';
export default function Skill_sec(props) {
  return (
    <>
      <div data-aos={props.aos} data-aos-duration={props.aos_duration}>
        <div className='pt-4'>
          <Serve
            our={'Our'}
            Service={'Skills'}
            lead={
              'Technorizen Software Solutions  has created some of the best technologies for majority of its clients. Our technologies have become the industry standards and still rule various domains.'
            }
          />
        </div>
        <section id='skil'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='skill'>
                  <div className='progress-wrap'>
                    <h3>Android Development</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar  color1'
                        role='progressbar'
                        aria-valuenow='40'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        Style='width: 80%'
                      >
                        <span className='bar-width'>80%</span>
                      </div>
                    </div>
                  </div>

                  <div className='progress-wrap'>
                    <h3>IOS Development</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color2'
                        role='progressbar'
                        aria-valuenow='20'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        Style='width: 90%'
                      >
                        <span className='bar-width'>90%</span>
                      </div>
                    </div>
                  </div>

                  <div className='progress-wrap'>
                    <h3>Web Development</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color3'
                        role='progressbar'
                        aria-valuenow='60'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        Style='width: 95%'
                      >
                        <span className='bar-width'>95%</span>
                      </div>
                    </div>
                  </div>

                  <div className='progress-wrap'>
                    <h3>App Development</h3>
                    <div className='progress'>
                      <div
                        className='progress-bar color4'
                        role='progressbar'
                        aria-valuenow='80'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        Style='width: 85%'
                      >
                        <span className='bar-width'>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='progress-wrap'>
                  <h3>Responsive Web Design</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar  color5'
                      role='progressbar'
                      aria-valuenow='40'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      Style='width: 95%'
                    >
                      <span className='bar-width'>95%</span>
                    </div>
                  </div>
                </div>

                <div className='progress-wrap'>
                  <h3>Graphic Design</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar color6'
                      role='progressbar'
                      aria-valuenow='20'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      Style='width: 90%'
                    >
                      <span className='bar-width'>90%</span>
                    </div>
                  </div>
                </div>

                <div className='progress-wrap'>
                  <h3>Business Analysis</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar color7'
                      role='progressbar'
                      aria-valuenow='60'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      Style='width: 85%'
                    >
                      <span className='bar-width'>85%</span>
                    </div>
                  </div>
                </div>

                <div className='progress-wrap'>
                  <h3>SEO Marketing</h3>
                  <div className='progress'>
                    <div
                      className='progress-bar color8'
                      role='progressbar'
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                      Style='width: 95%'
                    >
                      <span className='bar-width'>95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
