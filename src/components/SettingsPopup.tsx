import clsx from 'clsx';
import { useState } from 'react';

interface OwnProps {
  config: { [key: string]: string };
  toggleShowSettings: () => void;
}

const SettingsPopup = ({ config, toggleShowSettings }: OwnProps) => {
  const asBool = (value: string) => {
    return /true/i.test(value);
  };

  const [username, ] = useState(config.username);
  const [hideHeader, setHideHeader] = useState(asBool(config.hideHeader));
  const [hideFooter, setHideFooter] = useState(asBool(config.hideFooter));
  const [hideClock, setHideClock] = useState(asBool(config.hideClock));
  const [hideGreeter, setHideGreeter] = useState(asBool(config.hideGreeter));
  const [hideSearch, setHideSearch] = useState(asBool(config.hideSearch));

  const writeSettingsToLocalStorage = () => {
    const newConfig = Object.assign(config);
    newConfig.username = username;
    newConfig.hideHeader = hideHeader;
    newConfig.hideFooter = hideFooter;
    newConfig.hideClock = hideClock;
    newConfig.hideGreeter = hideGreeter;
    newConfig.hideSearch = hideSearch;
    localStorage.setItem('config', JSON.stringify(newConfig));
    toggleShowSettings();
  };

  return (
    <div className={'settings-popUp'}>
      <div className={'settings-container'}>
        <div className={'settings-header'}>
          <span>Settings (click to change)</span>
        </div>
        <div className={'setting-container'}>
          <span>Username:</span>
          <span className={clsx('setting', username !== config.username && 'text-red-400')}>{username}</span>
        </div>
        <div className={'setting-container'}>
          <span>Hide Header:</span>
          <span
            className={clsx('setting', hideHeader !== asBool(config.hideHeader) && 'text-red-400')}
            onClick={() => setHideHeader(!hideHeader)}
          >
            {hideHeader.toString()}
          </span>
        </div>
        <div className={'setting-container'}>
          <span>Hide Greeter:</span>
          <span
            className={clsx('setting', hideGreeter !== asBool(config.hideGreeter) && 'text-red-400')}
            onClick={() => setHideGreeter(!hideGreeter)}
          >
            {hideGreeter.toString()}
          </span>
        </div>
        <div className={'setting-container'}>
          <span>Hide Clock:</span>
          <span
            className={clsx('setting', hideClock !== asBool(config.hideClock) && 'text-red-400')}
            onClick={() => setHideClock(!hideClock)}
          >
            {hideClock.toString()}
          </span>
        </div>
        <div className={'setting-container'}>
          <span>Hide Search:</span>
          <span
            className={clsx('setting', hideSearch !== asBool(config.hideSearch) && 'text-red-400')}
            onClick={() => setHideSearch(!hideSearch)}
          >
            {hideSearch.toString()}
          </span>
        </div>
        <div className={'setting-container'}>
          <span>Hide Footer:</span>
          <span
            className={clsx('setting', hideFooter !== asBool(config.hideFooter) && 'text-red-400')}
            onClick={() => setHideFooter(!hideFooter)}
          >
            {hideFooter.toString()}
          </span>
        </div>
        <div className={'button'} onClick={writeSettingsToLocalStorage}>
          Save Settings
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
