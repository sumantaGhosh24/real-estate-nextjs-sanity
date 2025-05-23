"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AgentCardProps {
  name: string;
  slug: {current: string};
  email: string;
  phone: string;
  image: any;
}

const AgentCard = ({name, slug, email, phone, image}: AgentCardProps) => {
  return (
    <Card className="p-0">
      <Link href={`/agent/${slug.current}`}>
        <CardHeader className="p-3">
          <div className="mb-4 overflow-hidden">
            <Image
              src={image.asset.url}
              className="h-[200px] w-full rounded transition-all duration-300 ease-linear hover:scale-125"
              width={384}
              height={440}
              alt={name}
            />
          </div>
          <CardTitle className="capitalize">{name}</CardTitle>
        </CardHeader>
        <CardContent className="px-0 p-3">
          <CardDescription className="mb-2 font-semibold">
            Email: {email}
          </CardDescription>
          <CardDescription className="font-semibold">
            Phone: {phone}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default AgentCard;
