import React from 'react';
import { CgUnavailable } from 'react-icons/cg';

const Card = ({ title, children, footer }) => {
  return (
    <div className="card-container  shadow h-auto max-w-full bg-white rounded-lg">
      {title && <div className="card-header p-5 text-lg font-semibold ">{title}</div>}
      {title && <hr/>}
      <div className="card-content p-5 overflow-hidden">{children ? children : <div className="flex flex-col items-center">
              <div >

                <CgUnavailable className='w-16 h-16 text-gray-300' />
              </div>

              <p className="text-gray-500 mt-2">No record available</p>
            </div>}</div>
    </div>
  );
};

export default Card;
