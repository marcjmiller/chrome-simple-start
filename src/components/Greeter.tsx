interface OwnProps {
  username: string;
}

const Greeter = ({ username }: OwnProps) => {
  return <div className={'greeter-container'} data-testid={'message-container'}>{`Hello ${username}!`}</div>;
};

export default Greeter;
