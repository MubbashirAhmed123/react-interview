import React from 'react'

function Features() {
    const goals = [
        "Build a rainy day fund",
        "Save for a near-term expense",
        "Build long-term wealth",
        "Preserve wealth",
        "Buy a home",
        "Save for education",
        "Save for retirement",
        "Buy individual stocks",
        "Start investing"
    ];

    const investmentOptions = [
        {
            title: "Cash Account",
            description:
                "Save, spend, and pay bills while earning 3.75% APY from program banks on all your uninvested cash. Free 24/7 instant withdrawals. No monthly fees.",
            goals: ["Rainy day fund", "Upcoming expenses", "Buy a home"],
            buttons: [
                { label: "Get started", primary: true },
                { label: "Learn more", primary: false },
            ],
            image:
                "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Automated Bond Portfolio",
            description:
                "Invest in a diversified portfolio of bond ETFs designed to earn a higher yield than a high-yield savings account.",
            goals: ["Upcoming expenses", "Start investing", "Buy a home"],
            buttons: [
                { label: "Get started", primary: true },
                { label: "Learn more", primary: false },
            ],
            image:
                "https://images.unsplash.com/photo-1621971986731-b5b9b6b75e8d?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Automated Bond Ladder",
            description:
                "Lock in current rates with a ladder of US Treasuries and skip state income taxes.",
            goals: ["Wealth preservation", "Upcoming expenses"],
            buttons: [
                { label: "Get started", primary: true },
                { label: "Learn more", primary: false },
            ],
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
        },
    ];


    return (
        <div className='flex flex-col justify-between items-center'>
            <p className='text-3xl font-bold mb-4 text-center text-purple-600'>You choose the goal. We’ll help you start.
            </p>
            <div className='flex justify-center items-center flex-wrap gap-4'>

            {
                goals.map((g, i) => (
                        <div className='border hover:border-purple-400 text-black mx-4  rounded-full text-center w-[250px]'>{g}</div>
                    
                ))
            }


            </div>

              <div className='flex gap-10 mt-10 p-8'>

            {
                investmentOptions.map((invest, i) => (
                   <div className='bg-white shadow-2xl p-5 w-[450px] '>
                        <h1 className='text-purple-400 text-2xl font-semibold mb-4'>{invest.title}

                        </h1>
                        <p className='text-gray-900 font-semibold'>{invest.description}</p>
                        <div className='flex'>
                        {
                         invest.goals.map((gls, i) => (
                                    <div className='mx-3 bg-gray-400 text-black p-1 rounded-full text-center mt-5 w-fit'>{gls}</div>
                            ))
                         }
                         </div>

                     </div>
                 ))
                }
            
            </div>
        </div>
    )
}

export default Features

          