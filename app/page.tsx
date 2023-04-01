import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/inedx";
import RestaunratCard from "@/components/RestaurantCard";

type RestaurantProps = {
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

async function getRestaurant() {
  const res = await fetch(`http://localhost:3000/api/restaurants`);
  return res.json();
}
export default async function Home() {
  const RestaurantData = getRestaurant();

  // Wait for the promises to resolve
  const [restaurant] = await Promise.all([RestaurantData]);

  return (
    <main>
      <h1 className=" h-screen flex flex-col  ">
        <Header />
        <main className="px-7 md:px-16 py-4 w-full">
          <HeroSection />
          <p className="text-orange-500 ml-40 mb-4 text-2xl font-bold">
            Our Restaurant
          </p>
          <div className="flex items-center gap-10 justify-center flex-wrap">
            {restaurant.map((restaurant: RestaurantProps) => (
              <RestaunratCard key={restaurant.id} data={restaurant} />
            ))}
          </div>
        </main>
      </h1>
    </main>
  );
}
