import React from "react";

const HeroSection = () => {
  const sectionsData = [
    {
      title: "Automated Investing Account",
      description:
        "Invest confidently with our expert-built portfolios. Our classic and socially responsible portfolios are designed to weather any market condition over time. We'll handle the reinvesting and rebalancing, keep your fees low, and help you save money on taxes so you can invest with ease.",
      features: [
        "Globally diversified portfolios",
        "Personalized to your risk level and optimized to your tax situation",
        "Unlock tax savings with Tax-Loss Harvesting",
      ],
      buttons: [
        { label: "Get started", primary: true },
        { label: "Learn more", primary: false },
      ],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cash Account",
      description:
        "Earn more interest on your cash. As a new client, you can earn 4.40% high Annual Percentage Yield (APY) delivered from our program banks. That’s a 0.65% boost from our 3.75% base APY. Plus, your cash is easy to access and easy to invest, with no sneaky requirements and no strings attached.",
      features: [
        "No account fees",
        "Free 24/7 instant withdrawals",
        "Up to $8M FDIC insurance through program banks",
        "Start saving with $1",
      ],
      buttons: [{ label: "Learn more", primary: true }],
      note: "Base APY as of 10/17/25 and subject to change.",
      image:
        "https://images.unplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80",
    },
    {
  title: "Wealthfront S&P 500 Direct",
  description:
    "Upgrade your S&P 500® investing and access tax savings. Own individual stocks of the S&P 500® index in an automated portfolio that can help lower your tax bill—especially if you have capital gains from your stock compensation or other investments.",
  features: [
    "Invest in stocks of the S&P 500®",
    "Unlock tax savings with Tax-Loss Harvesting",
    "Low 0.09% fee",
  ],
  buttons: [
    { label: "Get started", primary: true },
    { label: "Learn more", primary: false },
  ],
  image:
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80",
}

  ];

  return (
    <div className="w-full flex flex-col gap-16 py-10 px-6 max-w-6xl mx-auto ">
      {sectionsData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 bg-white shadow-2xl`}
        >
          {/* Left: Text Content */}
          <div className="flex-1  rounded-2xl p-8  flex flex-col gap-5">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-lg text-gray-600 mt-2">{item.description}</p>
            </div>

            {item.features && (
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}

            {item.note && (
              <p className="text-sm text-gray-500 italic">{item.note}</p>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
              {item.buttons?.map((btn, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    btn.primary
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover rounded-2xl "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
