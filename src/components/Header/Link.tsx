import React from 'react';

import { useRouter } from 'next/router';

interface ILink {
  href: string;
}
const Link: React.FC<ILink> = ({ children, href }) => {
  const router = useRouter();
  return (
    <li className={router.asPath === href ? 'active' : ''}>
      <a
        href={href}
        onClick={e => {
          e.preventDefault();
          router.push(href);
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default Link;
