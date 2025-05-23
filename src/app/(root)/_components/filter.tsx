"use client";

import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {formUrlQuery} from "@/sanity/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FiltersProp {
  category: {
    image: any;
    name: string;
    slug: any;
    _id: string;
  }[];
  agent: {
    image: any;
    username: string;
    slug: any;
    _id: string;
  }[];
}

const Filters = ({category, agent}: FiltersProp) => {
  const [aCategory, setACategory] = useState("");
  const [aAgent, setAAgent] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategory = (link: string) => {
    let newUrl = "";
    if (aCategory === link) {
      setAAgent("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setACategory(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll: false});
  };

  const handleAgent = (link: string) => {
    let newUrl = "";
    if (aAgent === link) {
      setAAgent("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["agent"],
      });
    } else {
      setAAgent(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "agent",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll: false});
  };

  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <Select onValueChange={(e: any) => handleCategory(e)} value={aCategory}>
        <SelectTrigger className="text-black dark:text-white py-5 w-full bg-white dark:bg-black">
          <SelectValue placeholder="Enter property category" />
        </SelectTrigger>
        <SelectContent className="text-black dark:text-white py-3">
          <SelectItem value="all">All Category</SelectItem>
          {category.map(({_id, name, slug}) => (
            <SelectItem key={_id} value={slug.current}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(e: any) => handleAgent(e)} value={aAgent}>
        <SelectTrigger className="text-black dark:text-white py-5 w-full bg-white dark:bg-black">
          <SelectValue placeholder="Enter property agent" />
        </SelectTrigger>
        <SelectContent className="text-black dark:text-white py-3">
          <SelectItem value="all">All Agent</SelectItem>
          {agent.map(({_id, username, slug}) => (
            <SelectItem key={_id} value={slug.current}>
              {username}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
