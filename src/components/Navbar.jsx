import React from 'react'

function Navbar() {
  return (
    <div className='bg-purple-400 flex justify-between items-center p-2 text-white'>
        <div>
            <img src="https://www.wealthfront.com/next/contenthash/next/svg/optimized/wordmark-surface-homepage-redesign.contenthash.0cdedcb18816b7cd1fffa99aa80ac8a7ab787c61.svg" alt="" />
        </div>

        <ul className='flex gap-5'>
            <li>Cash</li>
            <li>Bond</li>
            <li>Automated Invasting</li>
            <li>Stocks</li>
            <li>Borrow</li>
            <li>Learn</li>
        </ul>

        <div className='mr-10'>
            <button className='border-2 border-white bg-transparent p-2 mx-4 rounded'>Login</button>
            <button className='border-2 bg-purple-500 p-2 rounded'>Get Started</button>
        </div>

    </div>
  )
}

export default Navbar