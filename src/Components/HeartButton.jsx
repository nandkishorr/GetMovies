// src/components/HeartButton.js
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';

const HeartButton = ({ onClick,fav }) => {
  const [checked, setChecked] = useState(fav);

  const handleClick = () => {
    setChecked(!checked);
    onClick(!checked); // Toggle the checked state and trigger the onClick callback
  };

  return (
    <div className='h-8 w-8 absolute bg-slate-100 top-5 right-5 rounded-full'>
      <div className="flex items-center justify-center m-2">
        <input
          type="Button"
          checked={checked}
          onChange={handleClick}
          className="hidden"
          id="heart-Button"
        />
        <label htmlFor="heart-Button" onClick={handleClick} className="cursor-pointer">
          {checked ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-500 text-xl " />
          )}
        </label>
      </div>
    </div>
  );
};

HeartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeartButton;

