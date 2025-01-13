import React, { useState } from 'react'

export default function Google() {

    const [selectedEntry, setSelectedEntry] = useState(null);

    const entries = [
        {
            id: 1,
            url: "http://www.google.com",
            title: "This is a simple title",
            description: "This is a simple description for this entry",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg"
        },
        {
            id: 2,
            url: "http://www.google.com",
            title: "Second entry",
            description: "This is a simple description for this entry",
            img: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
        },
        {
            id: 3,
            url: "http://www.google.com",
            title: "Third entry",
            description: "This is a simple description for this entry",
            img: "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_2810728.webp?w=1600&h=900"
        }
    ]

    function handleClickEntry(entry) {
        setSelectedEntry(entry);
    }

    /*  const results = document.querySelectorAll('.results li');
     const details = document.querySelector('.details');
     const overlay = document.querySelector('.overlay');
 
     results.forEach(result => {
         result.addEventListener('click', () => {
             const imgSrc = result.getAttribute('data-img');
             const description = result.getAttribute('data-description');
 
             if (window.innerWidth <= 768) {
                 details.classList.add('show');
                 overlay.classList.add('show');
             } else {
                 details.style.display = 'block';
             }
 
             details.querySelector('img').src = imgSrc;
             details.querySelector('p').textContent = description;
         });
     });
 
     overlay.addEventListener('click', () => {
         details.classList.remove('show');
         overlay.classList.remove('show');
     }); */
    return (
        <>
            <header>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google Logo" />
                <input type="text" placeholder="Search Google..."></input>
            </header>
            <main>
                <div className="results">
                    <ul>
                        {
                            entries.map((entry) => (
                                <li key={entry.id}
                                    onClick={(e) => {
                                        handleClickEntry(entry)
                                    }}>
                                    <p>{entry.url}</p>
                                    <p>{entry.title}</p>
                                    <span>{entry.description}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {
                    selectedEntry &&
                    <div className="details show">
                        <img src={selectedEntry.img} alt="" />
                        <p>{selectedEntry.title}</p>
                        <span>{selectedEntry.description}</span>
                    </div>

                }

            </main>
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
