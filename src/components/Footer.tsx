const Footer = () => {
  return (
    <div className={'footer-container'} data-testid={'footer-container'}>
      <p className={'xs'}>
        inspired by deepjyoti's excellent{' '}
        <a
          className={'text-red-500'}
          href='https://github.com/deepjyoti30/startpage.git'
          target='_blank'
          rel='noreferrer'
        >
          startpage
        </a>
      </p>
    </div>
  );
};

export default Footer;
