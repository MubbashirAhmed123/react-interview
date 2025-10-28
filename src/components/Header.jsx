import React from 'react'

function Header() {
    return (
        <header className='text-white bg-purple-400  flex justify-between items-center mt-20 p-10'>

            <div className=''>
                <h2 className='text-4xl font-bold mb-1'>New clients earn</h2>
                <h1 className='text-8xl font-bold mb-4'>4.40% APY</h1>
                <p className='text-lg w-[500px] mb-4'>Boost your APY from 3.75% to 4.40% APY for 3 months when you open and fund a Cash Account. No fees, no strings, and surprisingly few asterisks.

                </p>
                <button className='bg-purple-500 border px-2 py-2 rounded mb-4 hover:bg-orange-300 transition cursor-pointer'>Get Started with $1</button>
                <p>Base Annual Percentage Yield (APY) provided by program banks.</p>
                <p>Base APY as of 10/17/25 and subject to change.</p>
            </div>

            <div>
                image
            </div>


        </header>
    )
}

export default Header