// Thanks to https://mdawar.dev/blog/mdx-open-links-in-new-page
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export default function Link({ children, href }) {
  if (href.startsWith('/')) {
    return <GatsbyLink to={href}>{children}</GatsbyLink>;
  }

  const onPage = href.startsWith('#');

  return (
    <a
      href={href}
      // Open the link in a new page
      target={onPage ? null : '_blank'}
      // Add noopener and noreferrer for security reasons
      rel={onPage ? null : 'noopener noreferrer'}
    >
      {children}
    </a>
  );
}