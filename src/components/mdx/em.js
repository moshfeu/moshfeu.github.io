import React from "react"
import * as Styles from "./em.module.scss"

export default function Em({ children }) {
  return <em className={Styles.em}>{children}</em>
}