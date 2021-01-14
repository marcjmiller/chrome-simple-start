// import React from "react"

const App = () => (
  <div className='app-container flex flex-col text-center justify-around items-center min-h-screen min-w-screen'>
    <div className={'header-container text-5xl'}>chrome-simple-start</div>
    <div className={'greeting-container'}>A message goes here</div>
    <div className={'search-container'}>A search goes here</div>
    <div className={'resource-container flex flex-row justify-around min-w-full'}>
      <div className={'resource-header'}>
        header
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
      </div>
      <div className={'resource-header'}>
        header
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
      </div>
      <div className={'resource-header'}>
        header
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
      </div>
      <div className={'resource-header'}>
        header
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
      </div>
      <div className={'resource-header'}>
        header
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
        <div className={'resource'}>resource link</div>
      </div>
    </div>
    <div className={'date-time-container'}></div>
    <div className={'footer-container'}>
      <p className={'xs'}>
        inspired by deepjyoti's{' '}
        <a className={'text-red-500'} href='https://github.com/deepjyoti30/startpage.git'>
          startpage
        </a>
      </p>
    </div>
  </div>
);

export default App;
