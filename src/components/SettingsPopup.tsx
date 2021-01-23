interface OwnProps {
  config: { [key: string]: string };
}

const SettingsPopup = ({ config }: OwnProps) => {
  const { username, hideHeader, hideFooter, hideClock, hideGreeter, hideSearch } = config;

  return (
    <div className={'settings-popUp fixed top-0 right-0 p-4 m-6 bg-gray-600 rounded-lg w-2/6'}>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'text-2xl'}>
          <span>Settings</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Username:</span>
          <span>{username}</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Hide Header:</span>
          <span>{hideHeader.toString()}</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Hide Greeter:</span>
          <span>{hideGreeter.toString()}</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Hide Clock:</span>
          <span>{hideClock.toString()}</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Hide Search:</span>
          <span>{hideSearch.toString()}</span>
        </div>
        <div className={'w-3/4 flex flex-row justify-between self-center'}>
          <span>Hide Footer:</span>
          <span>{hideFooter.toString()}</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
