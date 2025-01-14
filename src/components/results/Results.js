import React, { useEffect, useState } from 'react'
import filterAnimals from '../../utils/filters';
import Loading from '../skeletons/Loading';
import Result from './Result';

export default function Results({ animals, handleClickEntry, searchInput }) {
    const [filteredAnimals, setFilteredAnimals] = useState();
    const [isLoading, setIsLoading] = useState();
    useEffect(() => {
        setIsLoading(true);
        async function getFileteredAnimals() {
            setFilteredAnimals(await filterAnimals(animals, searchInput));
            setIsLoading(false);
        }
        getFileteredAnimals();
    }, [searchInput]);
    return (
        <>
            {
                isLoading ? <Loading /> :
                    <div className="results">
                        {
                            filteredAnimals?.length > 0 &&
                            <ul title="Results list" aria-labelledby="results-list">
                                {
                                    filteredAnimals.map((animal) => (
                                        <Result key={animal.id} animal={animal} handleClickEntry={handleClickEntry} />
                                    ))
                                }
                            </ul>
                        }
                        {
                            filteredAnimals?.length === 0 &&
                            <div title="No results found" className="no-results">
                                {
                                    searchInput?.trim() !== '' && <div>No results found for <span className='bold'>'{searchInput}'</span></div>
                                }
                                <div className='pt-2'>Try looking for: <span className='bold'>insect, fish, horse, crocodile, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird</span></div>
                            </div>
                        }
                    </div>

            }

        </>
    )
}
