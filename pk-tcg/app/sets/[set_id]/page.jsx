'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';

export default function page() {
    const params = useParams()

    const [cards, setCards] = useState([]);

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
            <div className='bg-sky-700 flex flex-col w-3/4 justify-self-center p-4 mb-4'>
                <h2 className='text-xl'>Cards from *set name</h2>
                <p>INFO DEL SET Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dignissimos minima quas dolorum a eaque, necessitatibus voluptate esse.</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    cards?.map((card, index) => (
                        <div className='m-6 hover:cursor-pointer hover:shadow-2xl' key={index}>
                            <img src={card.url} className='hover:scale-105 hover:brightness-110'></img>
                        </div>
                    ))
                }
            </div>
        </>
    )
}