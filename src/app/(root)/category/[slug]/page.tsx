import {getProperties} from "@/sanity/actions";

import PropertyCard from "../../_components/property-card";
import SearchHeader from "../../_components/search-header";

export const metadata = {
  title: "Category",
};

interface CategoryPageParams {
  params: Promise<{slug: string}>;
}

const CategoryPage = async ({params}: CategoryPageParams) => {
  const {slug} = await params;

  const properties = await getProperties({
    query: "",
    category: slug || "",
    agent: "",
  });

  return (
    <section className="container mx-auto my-10">
      <SearchHeader query={""} agent={""} category={slug || ""} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {properties?.length > 0 ? (
          properties.map((property: any) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              agent={property.agent}
              area={property.area}
              bathrooms={properties.bathrooms}
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
          <p>No property found</p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
