import React from 'react'
import logo from './logo.svg'
import './App.css'
import ExampleComponent from '@jduenas/crl-component'
import WebpackComponent from '@jduenas/wp-component'

function App() {
  return (
    <div className='App'>
      <WebpackComponent></WebpackComponent>
      <ExampleComponent text='test'></ExampleComponent>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
