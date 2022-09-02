import React from 'react'
import './feature.css';

export default function Serve({our,lead,Service}) {
  return (
    <div className='center text-center'>  
          <h2>
          <span>{our}</span> {Service}
          </h2>
          <div className='divider_wrap' Style='border-top: 1px solid #ffffff;'>
            {' '}
            <span>
              <i></i>
            </span>
          </div>
          <p className='lead'>{lead}</p>
        </div>
  )
}
