import React,{useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function FeactureSec({header,para,iconImg}) {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div class='col-md-4 col-sm-6'>
        <div class='feature-wrap'data-aos="fade-up" data-aos-duration="3000">
          <div class='media'>
            <div class='media-left media-middle'>
              <a href='http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices'>
                <span>{iconImg}</span>
              </a>
            </div>
            <div class='media-body'>
              <h2>{header}</h2>
              <h3>{para}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
