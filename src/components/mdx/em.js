import React from 'react';
import Styles from './em.module.scss';

export default function Em({children}) {
  return <em className={Styles.em}>{children}</em>
}