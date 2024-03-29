import React from 'react';
import Piece from '../piecePositionHoc';

function BlackKnight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width={props.size} height="100%">
      <g>
        <path
          d="M36 36c-3.385-.972-10.115.43-13.5-2-3.385 2.43-10.115 1.028-13.5 2 0 0-1.646.542-3 2 .677.972 1.646.986 3 .5 3.385-.972 10.115.458 13.5-1 3.385 1.458 10.115.028 13.5 1 1.354.486 2.323.472 3-.5-1.354-1.945-3-2-3-2z"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M30 32c-2.5 2.5-12.5 2.5-15 0-.5-1.5 0-2 0-2h15s.5.5 0 2z"
          fillRule="evenodd"
          stroke="#000"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M30 30H15" fill="none" stroke="#000" strokeWidth="1.5" />
        <g strokeLinecap="round">
          <path
            d="M20.344 7.627c8.037.765 12.63 6.123 12.247 22.197H14.987c0-6.89 7.654-4.975 6.124-16.074"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="1.14813"
          />
          <path
            d="M21.875 13.75c.294 2.228-4.25 5.64-6.123 6.89-2.297 1.53-2.158 3.323-3.827 3.06-.798-.722 1.08-2.325 0-2.296-.766 0 .143.943-.766 1.53-.766 0-3.065.766-3.063-3.06 0-1.53 4.593-9.186 4.593-9.186s1.443-1.456 1.53-2.68c-.555-.76-.382-1.53-.382-2.295.765-.765 2.296 1.914 2.296 1.914h1.53s.6-1.525 1.915-2.297c.764 0 .764 2.297.764 2.297"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="1.14813"
            strokeLinejoin="round"
          />
          <path
            d="M10.776 19.49a.383.383 0 1 1-.765 0 .383.383 0 1 1 .766 0zM14.935 12.028a.383 1.148 30 1 1-.663-.383.383 1.148 30 1 1 .663.383z"
            stroke="#fff"
            strokeWidth="1.14813"
            strokeLinejoin="round"
          />
          <path
            d="M31.825 29.824c.766-15.31-4.21-21.05-9.185-21.815"
            fillRule="evenodd"
            stroke="#fff"
            strokeWidth=".76542"
          />
        </g>
        <path
          d="M15 30h15"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Piece(BlackKnight);
