import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <div>
            <div className='flex justify-center my-6'>
                <Image
                    className="hover:brightness-110"
                    src="/images/logo.png"
                    alt="Pokemon TCG logo"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}

export default Header
