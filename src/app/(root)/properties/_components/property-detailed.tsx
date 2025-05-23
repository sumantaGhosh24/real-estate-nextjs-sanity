"use client";

import Image from "next/image";

import {Badge} from "@/components/ui/badge";
import {usePrimaryColor} from "@/app/_components/primary-provider";

import PropertyMedia from "./property-media";
import AgentProfile from "./agent-profile";
import PropertyCard from "../../_components/property-card";

type Property = {
  _id: string;
  title: string;
  slug: {current: string};
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  category: any;
  agent: any;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    lat: number;
    lng: number;
  };
  mainImage: any;
  image: any[];
  features: string[];
  status: "for-rent" | "for-sale" | "sold";
};

interface PropertyProps {
  data: {
    property: Property;
    relatableProperty: Property[];
  };
}

const formatPrice = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

const PropertyDetailed = ({data}: PropertyProps) => {
  const {primaryColor} = usePrimaryColor();

  return (
    <div className="mx-auto container my-10">
      <Image
        src={data.property.mainImage.asset.url}
        alt="primary image"
        height={400}
        width={800}
        className="h-[350px] w-full rounded object-cover"
      />
      <PropertyMedia image={data.property.image} />
      <h2 className="my-5 text-3xl font-bold capitalize leading-none tracking-tight">
        {data.property.title}
      </h2>
      <h3 className="mb-5 text-base">{data.property.description}</h3>
      <span className="my-5 flex items-center font-bold">
        Category:{" "}
        <Badge
          className={`ml-2 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
        >
          <Image
            src={data.property.category.image.asset.url}
            alt="category"
            height={50}
            width={50}
            className="mr-2 h-8 w-8 rounded-full object-cover"
          />
          {data.property.category.name}
        </Badge>
      </span>
      <span className="mb-5 flex items-center font-bold">
        Agent:{" "}
        <Badge
          className={`ml-2 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
        >
          <Image
            src={data.property.agent.image.asset.url}
            alt="agent"
            height={50}
            width={50}
            className="mr-2 h-8 w-8 rounded-full object-cover"
          />
          {data.property.agent.name}
        </Badge>
      </span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{data.property.title}</h1>
              <p className={`text-2xl font-bold text-${primaryColor}-500`}>
                {formatPrice(data.property.price as any)}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {data.property.location.address}, {data.property.location.city},{" "}
              {data.property.location.state} {data.property.location.zipCode}
            </p>

            <div className="flex justify-between mb-6 text-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Bedrooms
                </p>
                <p className="text-xl font-semibold">
                  {data.property.bedrooms}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Bathrooms
                </p>
                <p className="text-xl font-semibold">
                  {data.property.bathrooms}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Area</p>
                <p className="text-xl font-semibold">
                  {data.property.area} sqft
                </p>
              </div>
            </div>
            {data.property.features && data.property.features.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {data.property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span
                        className={`mr-2 text-${primaryColor}-500 text-4xl`}
                      >
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        {data.property.agent && <AgentProfile agent={data.property.agent} />}
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Relatable Property</h2>
        <div className="flex items-center justify-between flex-wrap gap-3">
          {data.relatableProperty.filter(
            (property) => property._id !== data.property._id
          ).length > 0 ? (
            data.relatableProperty
              .filter((property) => property._id !== data.property._id)
              .slice(0, 3)
              .map((property) => (
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  agent={property.agent}
                  area={property.area}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bathrooms}
                  category={property.category}
                  description={property.description}
                  location={property.location}
                  mainImage={property.mainImage}
                  price={property.price as any}
                  status={property.status}
                  title={property.title}
                />
              ))
          ) : (
            <h3 className="text-center font-bold my-3">
              No Relatable Property Found!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailed;
