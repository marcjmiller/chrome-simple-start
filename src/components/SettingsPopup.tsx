import { IConfig } from '../config';

interface OwnProps {
  config: IConfig;
}

const SettingsPopup = ({ config }: OwnProps) => {
  return (
    <div className={'settings-popUp fixed top-10 right-1 p-4 mx-4 bg-gray-600 rounded-lg'}>
      <div className={'text-2xl'}>Settings</div>
      <div>Username: {config.username}</div>
    </div>
  );
};

export default SettingsPopup;
