'use client'

import React, { useEffect, useState } from 'react'

export default function Sets() {

    const [sets, setSets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/sets/")
            .then( 
            response => response.json()
        )
        .then(
            data => {
                console.log(data)
                setSets([...data])
            }
        )
    }, [])

    return (
        <>
            {/* move to header component */}
            <div className='flex justify-center'>
                <h1 className="text-sky-400 text-3xl font-bold my-6">
                    Pokemon TCG
                </h1>
            </div>
            <div className='bg-sky-700 flex flex-col w-3/4 justify-self-center p-4 mb-4'>
                <h2 className='text-xl'>Sets</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dignissimos minima quas dolorum a eaque, necessitatibus voluptate esse.</p>
            </div>
            <div className='max-w-[1024px] mx-auto flex'>
                <div className='flex flex-wrap justify-center'>
                    {
                        sets?.map((set, index) => (
                            <div className='set-box text-slate-950 bg-indigo-500 hover:shadow-2xl hover:cursor-pointer size-44 m-6 p-2 rounded-md border-2 border-amber-400 content-center' key={index}>
                                <img src={set.logo_url} className=''></img>
                                <ul className='hidden'>
                                    <li>
                                        {set.name}
                                    </li>
                                    <li>
                                        PTCGO code:
                                        {set.ptcgo_code}
                                    </li>
                                    <li>
                                        Release date:
                                        {/* format date */}
                                        {set.release_date}
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}