import styles from './styles.module.css'
import React from 'react'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div className={styles.test}>CRL Example Components Loaded .39: {text}</div>
  )
}

export default ExampleComponent
