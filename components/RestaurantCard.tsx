import Image from "next/image";
import React from "react";
import { DollarSign, Clock } from "lucide-react";
import Link from "next/link";
type RestaurantCardProps = {
  data: {
    id: number;
    name: string;
    main_image: string;
    images: string[];
    description: string;
    open_time: string;
    close_time: string;
    slug: string;
    price: string;
  };
};

const RestaurantCard: React.FC<RestaurantCardProps> = (restaurant) => {
  return (
    <div className="bg-cardOverlay backdrop-blur-md pb-6 h-full items-center drop-shadow-lg justify-center flex flex-col  w-80 rounded-xl ">
      <div className="rounded-t-xl">
        <Image
          src={restaurant.data.main_image}
          alt="restaurant-image"
          width={320}
          height={240}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col mt-2 ml-1  justify-center gap-2 ">
        <p className="font-semibold text-textColor text-base lg:text-lg">
          {restaurant.data.name}
        </p>
        <p className="text-gray-500">
          {restaurant.data.description.slice(0, 60)}...
        </p>
        <div className="flex items-center gap-1">
          <DollarSign size={18} />
          <p className="text-gray-600">{restaurant.data.price}</p>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={18} />
          <p className="text-gray-600">
            {restaurant.data.open_time.slice(0, 5)}-
            {restaurant.data.close_time.slice(0, 5)}
          </p>
        </div>
      </div>
      <Link
        href={`restaurant/${restaurant.data.slug}`}
        type="button"
        className=" bg-gradient-to-br rounded-lg text-center hover:shadow-lg text-white transition-all ease-in-out duration-100 w-72 mt-2 px-4 py-2 from-gray-400 to-gray-500"
      >
        Reserve
      </Link>
    </div>
  );
};
export default RestaurantCard;
