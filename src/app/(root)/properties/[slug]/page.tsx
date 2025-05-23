import {getProperty} from "@/sanity/actions";

import PropertyDetailed from "../_components/property-detailed";

export const revalidate = 900;

export const metadata = {
  title: "Property",
};

interface PropertyPageParams {
  params: Promise<{slug: string}>;
}

const PropertyPage = async ({params}: PropertyPageParams) => {
  const {slug} = await params;

  const data = await getProperty(slug);

  return (
    <>
      <PropertyDetailed data={data} />
    </>
  );
};

export default PropertyPage;
