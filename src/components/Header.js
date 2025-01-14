import React from 'react'
import GitHub from '../images/github.png'
import SearchContainer from './SearchContainer'

export default function Header({ initialState, handleChangeInput, searchInput }) {
    return (
        <header>
            {
                initialState ?
                    <>
                        <span style={{ width: '100%' }}><span style={{ fontWeight: 'bold' }}>Agile Content</span> Frontend test</span>
                        <a href="https://github.com/xthevenot" target='_blank' rel='noreferrer'>
                            <img src={GitHub} width={36} height={36} alt="Github account" />
                        </a>

                    </>
                    :
                    <>
                        <img width={100} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" />
                        <SearchContainer handleChangeInput={handleChangeInput} searchInput={searchInput} />
                    </>
            }

        </header>
    )
}
