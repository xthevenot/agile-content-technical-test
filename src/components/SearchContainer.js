import React from 'react'
import { useDebouncedCallback } from 'use-debounce';

export default function SearchContainer({ handleChangeInput, searchInput, initialState, handleClickSearch }) {

  //To avoid trigger an event each time the user push a key
  const handleSearch = useDebouncedCallback((term) => {
    handleChangeInput(term);
  }, 300);

  return (
    <>
      <div className="searchbox">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        <input
          aria-label="Search for animal type or name"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              //Only used for initial state
              if (handleClickSearch) {
                handleClickSearch();
              }

            }
          }}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          autoComplete="off"
          inputMode="search"
          defaultValue={searchInput}
          placeholder="Search for animal type or name"
          type="search"
        />
      </div>
      {
        initialState && <button data-testid="my-btn" disabled={searchInput?.trim() === ''} onClick={handleClickSearch}>Search</button>
      }

    </>
  )
}
