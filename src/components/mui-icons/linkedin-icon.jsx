import * as React from 'react';

const LinkedInIcon = props => (
  <svg
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      clipRule="evenodd"
      cx={16}
      cy={16}
      fill="#007BB5"
      fillRule="evenodd"
      r={16}
    />
    <g fill="#FFF">
      <path d="M7 11h4v14H7zM20.499 11c-2.791 0-3.271 1.018-3.499 2v-2h-4v14h4v-8c0-1.297.703-2 2-2 1.266 0 2 .688 2 2v8h4v-7c0-4-.521-7-4.501-7z" />
      <circle cx={9} cy={8} r={2} />
    </g>
  </svg>
);

export default LinkedInIcon;
