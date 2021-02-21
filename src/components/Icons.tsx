const icons: { [name: string]: string } = {
  // https://heroicons.com/ -> Small Icons
  cog:
    'M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z',
  pencil:
    'M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z',
};

interface OwnProps {
  name: string;
  onClick?: () => void;
  className?: string;
}

const Icons = ({ name, onClick, className }: OwnProps) => (
  <div onClick={onClick} className={`icon-container ${className}`}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' height='20' width='20' fill='currentColor'>
      <path fillRule='evenodd' d={icons[name]} clipRule='evenodd' />
    </svg>
  </div>
);

export default Icons;
