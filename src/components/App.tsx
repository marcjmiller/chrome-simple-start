import React, { useState } from 'react';

import Clock from './Clock';
import Footer from './Footer';
import Greeter from './Greeter';
import Header from './Header';
import Resources from './Resources';
import Search from './Search';

import config, { defaultConfig } from '../config';
import SettingsPopup from './SettingsPopup';
import Icons from './Icons';

const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleShowSettings = () => setShowSettings(!showSettings);

  return (
    <div className='app-container'>
      <div className={'toggle-show-settings fixed'} data-testid={'toggle-show-settings'}>
        <Icons name={'cog'} className={'fixed top-1 right-1 cursor-pointer opacity-25 hover:opacity-100'} onClick={toggleShowSettings} />
        {showSettings && <SettingsPopup config={config} toggleShowSettings={toggleShowSettings} />}
      </div>
      {(!config || !config.hideHeader) && <Header />}
      {(!config || !config.hideGreeter) && <Greeter username={config?.username || defaultConfig.username} />}
      {(!config || !config.hideClock) && <Clock />}
      {(!config || !config.hideSearch) && <Search />}
      <Resources resources={config?.resources.length > 0 ? config.resources : defaultConfig.resources} />
      {(!config || !config.hideFooter) && <Footer />}
    </div>
  );
};

export default App;
