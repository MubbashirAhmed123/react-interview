import React from 'react'

function Footer() {

const data = [
  {
    title: "1.3M+",
    description: "Trusted by 1.3M+ clients"
  },
  {
    title: "$90B+",
    description: "$90B+ in client funds"
  },
  {
    title: "13+ years",
    description: "Simplifying finances since 2011"
  }
];

    return (
        <div className='bg-purple-600 '>
        <div className='flex justify-between items-center mx-10 p-5'>
                <p className='text-4xl text-white font-bold w-[500px]'>“
                    Wealthfront is the best overall robo-advisor.
                    Investopedia logo
                    2025 4</p>
            <div>
image
                <img src="" alt="" />
            </div>
        </div>

<div className='flex justify-center gap-10 text-white mt-5'>
        {
            data.map((d,i)=>(
                <div className='bg-black/30 shadow-2xl p-4 rounded'>
                    <h1 className='text-2xl font-semibold mb-3'>{d.title}</h1>
                    <p>{d.description}</p>
                </div>
            ))
        }

        
        </div>
        <p className='p-5 mt-5'>The testimonials above are by clients of Wealthfront Advisers and Wealthfront Brokerage. No compensation was provided. These testimonials may not be representative of other clients’ experience. Past performance is no guarantee of success. Investopedia receives compensation from Wealthfront Advisers for advertising, which presents a conflict of interest. The endorsements provided are independent and not directly influenced by the compensation. There is no other affiliation between Investopedia and Wealthfront Advisers, and Investopedia is not a client of Wealthfront Advisers.

</p>


        </div>
    )
}

export default Footer