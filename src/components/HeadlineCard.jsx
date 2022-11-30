import React from "react";

export const HeadlineCard = () => {
  const foodOrders = [
    {
      id: 1,
      title: "Sun's Out, BOGO's Out",
      sub_title: "Through 8/24",
      image:
        "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      button: "Order now",
    },
    {
      id: 2,
      title: "New Restaurants",
      sub_title: "Added Daily",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      button: "Order now",
    },
    {
      id: 3,
      title: "We Deliver Desserts Too",
      sub_title: "Tasty Teats",
      image:
        "https://images.unsplash.com/photo-1564759077036-3def242e69c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      button: "Order now",
    },
  ];

  return (
    <div className="max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}

      {foodOrders.map(({ id, title, sub_title, image, button }) => (
        <div key={id} className="relative">
          <div className="absolute flex flex-col p-2 bg-black/50 inset-0 items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-lg font-medium text-white">{sub_title}</p>
            </div>
            <button className="button primary">{button}</button>
          </div>
          <img
            className="max-h-[150px] w-full md:max-h-[200px] object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};
