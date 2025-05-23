"use client";

import Image from "next/image";
import Link from "next/link";
import {Bath, BedDouble, Square} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {usePrimaryColor} from "@/app/_components/primary-provider";

interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
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
  status: "for-rent" | "for-sale" | "sold";
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(amount);
};

const PropertyCard = ({
  id,
  title,
  description,
  price,
  bedrooms,
  bathrooms,
  area,
  category,
  agent,
  location,
  mainImage,
  status,
}: PropertyCardProps) => {
  const {primaryColor} = usePrimaryColor();

  return (
    <Card className="relative py-0">
      <Link href={`/properties/${id}`}>
        <CardHeader className="p-3">
          <div className="mb-4 overflow-hidden">
            <Image
              src={mainImage.asset.url}
              className="h-[200px] w-full rounded transition-all duration-300 ease-linear hover:scale-125"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="capitalize text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <CardDescription className="mb-4 first-letter:uppercase">
            {description}
          </CardDescription>
          <p>
            Category:{" "}
            <Badge
              className={`text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800 uppercase`}
            >
              {category?.name}
            </Badge>
          </p>
          <p>
            Agent:{" "}
            <Badge
              className={`text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800 uppercase mt-4`}
            >
              {agent?.name}
            </Badge>
          </p>
          <div
            className={`absolute top-2 right-2 text-white px-2 py-1 rounded text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
          >
            {status === "for-rent"
              ? "For Rent"
              : status === "for-sale"
                ? "For Sale"
                : "Sold"}
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm my-2">
            {location?.city}, {location?.state}
          </p>
          <p className={`text-xl font-bold text-${primaryColor}-500 mb-4`}>
            {formatCurrency(price as any)}
            {status === "for-rent" && (
              <span className="text-sm font-normal">/month</span>
            )}
          </p>
          <div className="flex items-center  flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
            {bedrooms && (
              <Badge
                className={`flex items-center bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                <BedDouble className="h-4 w-4 mr-1" />
                <span>
                  {bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}
                </span>
              </Badge>
            )}
            {bathrooms && (
              <Badge
                className={`flex items-center bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                <Bath className="h-4 w-4 mr-1" />
                <span>
                  {bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}
                </span>
              </Badge>
            )}
            {area && (
              <Badge
                className={`flex items-center bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                <Square className="h-4 w-4 mr-1" />
                <span>{area} sq ft</span>
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PropertyCard;
