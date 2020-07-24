import React from 'react';

export default function HeaderItem({ item, url, handleClick }) {
  return (
    <a
      href={url}
      onClick={() => handleClick(url)}
    >
      {item}
    </a>
  );
}
