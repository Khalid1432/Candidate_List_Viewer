import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => (
    <div>
        <input
            type="text"
            placeholder="Search by Name or Skills"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className='w-[250px] px-3 py-2 text-base rounded-lg outline-none border-2 border-pink-600'
        />
    </div>
);

export default SearchBar;
