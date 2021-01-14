// import React from "react"

const App = () => (
  <div className='app-container bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col text-center justify-around items-center min-h-screen min-w-screen'>
    <div className={'header-container text-5xl'} data-testid={'header-container'}>chrome-simple-start</div>
    <div className={'greeting-container'} data-testid={'message-container'}>A message goes here</div>
    <div className={'clock-container'} data-testid={'clock-container'}>
      A clock goes here
    </div>
    <div className={'search-container'} data-testid={'search-container'}>
      A search goes here
    </div>
    <div className={'resource-container flex flex-row justify-around min-w-full'} data-testid={'resource-container'}>
      {[1, 2, 3, 4, 5].map((i) => {
        return (
          <div
            className={'resource bg-gray-300 dark:bg-gray-800 rounded-lg px-8 py-4 font-medium'}
            data-testid={'resource'}
            key={`resource-${i}`}
          >
            <div className={'resource-header pb-2'}>header {i}</div>
            <div className={'resource-link text-sm font-thin'}>resource link</div>
            <div className={'resource-link text-sm font-thin'}>resource link</div>
            <div className={'resource-link text-sm font-thin'}>resource link</div>
          </div>
        );
      })}
    </div>
    <div className={'footer-container'} data-testid={'footer-container'}>
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
