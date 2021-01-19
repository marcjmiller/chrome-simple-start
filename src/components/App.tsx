import React, { useState } from 'react';

import Clock from './Clock';
import Footer from './Footer';
import Greeter from './Greeter';
import Header from './Header';
import Resources from './Resources';
import Search from './Search';

import config, { IResource } from '../config/config';
import Icons from './Icons';

const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className='app-container bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col text-center justify-around items-center min-h-screen min-w-screen'>
      <div className={''}>
        <Icons name={'cog'} className={'absolute top-1 right-1'} onClick={() => setShowSettings(!showSettings)} />
        {showSettings && (
          <div className={'absolute top-10 right-1 p-4 mx-4 bg-gray-600 rounded-lg '}>Settings shown!</div>
        )}
      </div>
      {!config.hideHeader && <Header />}
      {!config.hideGreeter && <Greeter username={config.username} />}
      {!config.hideClock && <Clock />}
      {!config.hideSearch && <Search />}
      <Resources resources={config.resources.length > 0 ? config.resources : ([] as IResource[])} />
      {!config.hideFooter && <Footer />}
    </div>
  );
};

export default App;
