import React from 'react';
import { preToCodeBlock } from "mdx-utils"

import Link from './link';
import Code from './code';

export default {
  a: Link,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}