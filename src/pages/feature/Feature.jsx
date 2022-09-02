import React from 'react';
import FeactureSec from './FeactureSec';
import { FaCrosshairs, FaTabletAlt, FaBriefcase, FaCrop, FaCogs, FaBraille, FaPaintBrush, FaBtc, FaGamepad } from 'react-icons/fa';
import './feature.css';
import Serve from './Serve';

export default function Feature(props) {
  return (
    <>
      <div className='feature' data-aos={props.aos} data-aos-duration={props.aos_duration}>
        <Serve our={'Our'} Service={'Service'} lead={'We work with great zeal to bring innovative and user friendly web applications.'} />
        <div className='container'>
          <div className='row'>
            <div className='features' data-aos={props.aos} data-aos-duration={props.aos_duration}>
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaCrosshairs />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaTabletAlt />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaBriefcase />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaCrop />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaCogs />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaBraille />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaPaintBrush />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaBtc />}
              />
              <FeactureSec
                header={'Web Services'}
                para={'A web service is an accumulation of open conventions and guidelines utilized for trading information.'}
                iconImg={<FaGamepad />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
