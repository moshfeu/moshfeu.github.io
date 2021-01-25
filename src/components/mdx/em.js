import React from 'react';
import { css } from "theme-ui"

export default function Em({children}) {
  return <em css={css({
    display: 'block',
    textAlign: 'center',
    fontSize: '0.9rem',
    paddingBlock: 1
  })}>{children}</em>
}