'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';

export default function page() {
    const params = useParams()

    const [card, setCard] = useState([]);

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
            <div className='bg-sky-700 flex flex-col w-3/4 justify-self-center p-4 mb-14'>
                <h2 className='text-xl'>Card</h2>
                <p>INFO DE LA CARD Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dignissimos minima quas dolorum a eaque, necessitatibus voluptate esse.</p>
            </div>
            <div className='flex justify-center mb-14'>
                {
                    card?.map((card, index) =>
                        card.type == 'large' &&
                        <div className='justify-items-center ' key={index}>
                            <img src={card.url} className='card-detail hover:shadow-2xl hover:brightness-110'></img>
                        </div>
                    )
                }
            </div>
        </>
    )
}