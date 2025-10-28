import React from 'react'

function Rating() {
    return (
        <div className='bg-purple-400 flex justify-between items-center p-5 text-white'>
        

            <div>
                <h1 className='font-semibold text-3xl'> <img src="https://www.wealthfront.com/next/contenthash/next/svg/optimized/nerdwallet-light.contenthash.1263616f3ba0c253233083f3ab9a090a292ba7c2.svg" alt="" />
                </h1>
                <p className='w-fit'>Best Robo-advisor, Portfolio Options, 2022-25 1
                </p>
            </div>

            <div>
                <h1 className='font-semibold text-3xl'>Bankrate logo
                </h1>
                <p>Best Cash Management Account, 2023-25 1
                </p>
            </div>

            <div>
                <h1 className='font-bold text-3xl'>1.3M+</h1>
                <p>Funded clients 2
                </p>
            </div>

            <div>
                <h1 className='font-bold text-3xl'>$90B+</h1>
                <p>In total assets 2</p>
            </div>

            <div>
                <h1 className='font-bold text-3xl'>4.8</h1>
                <p>Apple App Store 3
                </p>
            </div>

            <div>
                <h1 className='font-bold text-3xl'>4.9</h1>
                <p>Google Play Store3</p>
            </div>
        </div>
    )
}

export default Rating