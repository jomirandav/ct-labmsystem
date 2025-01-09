'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';

export default function page() {
    const params = useParams()

    const [cards, setCards] = useState([]);
    const url = 'http://localhost:3000/cards/';

    useEffect(() => {
        fetch(`http://localhost:1337/sets/${params.set_id}/cards`).then(
            response => response.json()
        ).then(
            data => {
                setCards([...data])
            }
        )
    }, [])

    return (
        <>
            <Header />

            {/* <div className='bg-sky-700 flex flex-col w-2/4 justify-self-center p-4 my-4 bg-opacity-30 rounded-md '>
                <h2 className='text-xl'>Cards from *set name</h2>
                <p>INFO DEL SET (sets table): symbol url, release date, printed total(?) .</p>
            </div> */}

            <div className='flex flex-wrap justify-center'>
                {
                    cards?.map((card, index) => (
                        <div className='m-6 hover:cursor-pointer hover:shadow-2xl' key={index}>
                            <a href={`${url}${card.card_id}`}>
                                <img src={card.url} className='hover:scale-105 hover:brightness-110 ease-out duration-300'></img>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}