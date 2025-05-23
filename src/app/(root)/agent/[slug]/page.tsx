import {getProperties} from "@/sanity/actions";

import PropertyCard from "../../_components/property-card";
import SearchHeader from "../../_components/search-header";

export const metadata = {
  title: "Agent",
};

interface AgentPageParams {
  params: Promise<{slug: string}>;
}

const AgentPage = async ({params}: AgentPageParams) => {
  const {slug} = await params;

  const properties = await getProperties({
    query: "",
    category: "",
    agent: slug || "",
  });

  return (
    <section className="container mx-auto my-10">
      <SearchHeader query={""} category={""} agent={slug || ""} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {properties?.length > 0 ? (
          properties.map((property: any) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              agent={property.agent}
              area={property.area}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              category={property.category}
              description={property.description}
              location={property.location}
              mainImage={property.mainImage}
              price={property.price}
              status={property.status}
              title={property.title}
            />
          ))
        ) : (
          <p>No agent found</p>
        )}
      </div>
    </section>
  );
};

export default AgentPage;
