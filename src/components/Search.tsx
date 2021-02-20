import clsx from 'clsx';
import { useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const isSearchFilled = searchValue !== '';

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearch = () => {
    if (isSearchFilled) {
      window.location.href = `https://www.google.com/search?q=${searchValue}`;
    }
  };

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      handleSearch()
    }

  }

  return (
    <div className={'search-container'} data-testid={'search-container'}>
      <input
        className={'w-full text-lg resize-none rounded-l-lg text-gray-900 p-2 outline-none border border-gray-900'}
        placeholder={'Search something on Google...'}
        value={searchValue}
        onChange={({ target: { value } }) => handleChange(value)}
        onKeyPress={({key}) => handleKeyPress(key)}
      />
      <div
        className={clsx(
          'rounded-r-lg bg-white w-1/6 flex flex-row justify-center items-center border border-gray-900 font-bold',
          isSearchFilled ? 'text-gray-900 hover:text-red-400 cursor-pointer' : 'text-gray-400 cursor-default'
        )}
        
        onClick={handleSearch}
      >
        Search
      </div>
    </div>
  );
};

export default Search;
