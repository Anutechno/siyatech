import React from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';
import './admin.css';

export default function AdCaro() {
  return (
    <>
      <div id='carouselExampleIndicators' class='carousel slide' data-bs-ride='true'>
        <div class='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleIndicators'
            data-bs-slide-to='0'
            class='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5'></button>
          <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6'></button>
        </div>
        <div class='carousel-inner bdr'>
          <div class='carousel-item active'>
            <img src='http://technorizen.com/company/uploads/images/admin1.png' class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src='http://technorizen.com/company/uploads/images/admin2.png' class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src='http://technorizen.com/company/uploads/images/admin3.png' class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src='http://technorizen.com/company/uploads/images/admin3.png' class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src='http://technorizen.com/company/uploads/images/admin3.png' class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src='http://technorizen.com/company/uploads/images/admin3.png' class='d-block w-100' alt='...' />
          </div>
        </div>
        <button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
          <span class='carousel-control-prev-icon inn' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button class='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
          <span class='carousel-control-next-icon inn' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
        <div className='text-center lfricn pt-4'>
          <span><FaRegArrowAltCircleLeft/></span>
          <span><FaRegArrowAltCircleRight/></span>
        </div>
      </div>
    </>
  );
}
