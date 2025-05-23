import {getAgent, getCategory, getProperties} from "@/sanity/actions";

import Filters from "./_components/filter";
import PropertyCard from "./_components/property-card";
import SearchForm from "./_components/search-form";
import SearchHeader from "./_components/search-header";

export const revalidate = 900;

export const metadata = {
  title: "Properties",
};

interface Props {
  searchParams: Promise<{[key: string]: string | undefined}>;
}

const HomePage = async ({searchParams}: Props) => {
  const {query, category, agent} = await searchParams;

  const properties = await getProperties({
    query: query || "",
    category: category || "",
    agent: agent || "",
  });

  const categories = await getCategory();

  const agents = await getAgent();

  return (
    <>
      <section className="bg-image relative h-[500px]">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container mx-auto flex h-full items-center justify-center">
          <div className="z-10 w-full text-white">
            <h1 className="mb-24 text-center text-5xl font-bold leading-10 text-white sm:text-6xl sm:leading-10">
              All Blogs
            </h1>
            <div className="flex flex-col items-center justify-between gap-3">
              <SearchForm />
              <Filters category={categories} agent={agents} />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-10 container mx-auto">
        <SearchHeader
          query={query || ""}
          category={category || ""}
          agent={agent || ""}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {properties?.length > 0 ? (
            properties.map((property: any) => (
              <PropertyCard
                key={property._id}
                id={property._id}
                title={property.title}
                description={property.description}
                agent={property.agent}
                category={property.category}
                location={property.location}
                mainImage={property.mainImage}
                status={property.status}
                area={property.area}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
              />
            ))
          ) : (
            <p>No property found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
