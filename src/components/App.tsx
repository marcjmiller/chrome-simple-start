import React from 'react';

import Clock from './Clock';
import Footer from './Footer';
import Greeter from './Greeter';
import Header from './Header';
import Resources from './Resources';
import Search from './Search';

import config, { IResource } from '../config/config';

const App: React.FC = () => {
  return (
    <div className='app-container bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col text-center justify-around items-center min-h-screen min-w-screen'>
      <Header />
      <Greeter username={config.username} />
      <Clock />
      <Search />
      <Resources resources={config.resources.length > 0 ? config.resources : ([] as IResource[])} />
      <Footer />
    </div>
  );
};

export default App;
