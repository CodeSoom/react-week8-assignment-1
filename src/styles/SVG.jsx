import React from 'react';

export function MenuItemSVG() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-tools-kitchen-2"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#ffbf00"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 106 0V4" />
    </svg>
  );
}

export function Logo() {
  return (
    <svg
      className="icon icon-tabler icon-tabler-truck-delivery"
      width={40}
      height={40}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={7} cy={17} r={2} />
      <circle cx={17} cy={17} r={2} />
      <path d="M5 17H3v-4M2 5h11v12m-4 0h6m4 0h2v-6h-8m0-5h5l3 5" />
      <path d="M3 9L7 9" />
    </svg>
  );
}
