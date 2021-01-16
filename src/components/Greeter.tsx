interface OwnProps {
  username: string;
}

const Greeter = ({ username }: OwnProps) => {
  return <div className={'greeting-container'} data-testid={'message-container'}>{`Hello ${username}!`}</div>;
};

export default Greeter;
