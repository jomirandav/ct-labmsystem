'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';

export default function page() {
    const params = useParams()

    const [card, setCard] = useState([]);
    const market_url = 'https://prices.pokemontcg.io/';

    useEffect(() => {
        fetch(`http://localhost:1337/cards/${params.card_id}`).then(
            response => response.json()
        ).then(
            data => {
                setCard([...data])
            }
        )
    }, [])

    return (
        <>
            <Header />
            {
                card?.map((card, index) =>
                    card.image_type == 'large' &&
                    <div key={index} className='flex justify-center my-8'>
                            <img src={card.image_url} className='card-detail hover:shadow-2xl hover:brightness-110 w-2/5'></img>
                        <div className='bg-sky-700 flex flex-col size-80 p-4 my-4 bg-opacity-30 rounded-md ml-8'>
                            <h2 className='text-xl my-2'>{card.name}</h2>
                            <ul>
                                <li>Supertype: {card.supertype}</li>
                                <li>Subtypes: {card.subtypes}</li>
                                <li>Types: {card.types}</li>
                                <li>Rarity: {card.rarity}</li>
                            </ul>
                            <a
                                className="my-4 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                                href={`${market_url}tcgplayer/${card.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tcgplayer price
                            </a>
                            <a
                                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                                href={`${market_url}cardmarket/${card.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cardmarket price
                            </a>
                        </div>
                    </div>
                )
            }
        </>
    )
}