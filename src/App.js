import React, { useMemo, useState } from 'react'
import { createAnimalsList } from './library/faker';
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/results/Results';
import SearchContainer from './components/SearchContainer';
import Details from './components/Details';
import './App.css';

export default function App() {

    const [initialState, setInitialState] = useState(true);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    //We don't want the list to be updated any time
    const animals = useMemo(() => createAnimalsList(), []);

    /**
     * Handle the entry click, update the selected entry state
     * @param {*} entry selected entry (animal)
     */
    function handleClickEntry(entry) {
        setSelectedEntry(entry);
    }

    /**
     * Handle the first search (by clicking the search button or with enter key), set the initial state to false
     * @param {*} entry selected entry (animal)
     */
    function handleClickSearch() {
        setInitialState(false);
    }

    /**
     * Handle input search changes, update the search input state
     * @param {*} entry selected entry (animal)
     */
    function handleChangeInput(value) {
        setSelectedEntry(null);
        setSearchInput(value);
    }
    return (
        <>
            <Header initialState={initialState} handleChangeInput={handleChangeInput} searchInput={searchInput} />
            <main>
                {
                    initialState ?
                        <div className="initial-container">
                            <div className="logo">
                                <img src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg" alt="App logo" />
                            </div>
                            <div className="search-container">
                                <SearchContainer handleChangeInput={handleChangeInput} searchInput={searchInput} initialState={initialState} handleClickSearch={handleClickSearch} />
                            </div>
                        </div>
                        :
                        <Results animals={animals} handleClickEntry={handleClickEntry} searchInput={searchInput} />
                }
                {
                    selectedEntry &&
                    <Details selectedEntry={selectedEntry} />
                }

            </main>
            <Footer />
            {
                selectedEntry &&
                <div className="overlay show"
                    onClick={(e) => {
                        handleClickEntry(null);
                    }}></div>
            }


        </>

    )
}
