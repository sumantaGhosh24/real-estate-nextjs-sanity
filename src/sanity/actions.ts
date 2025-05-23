import {groq} from "next-sanity";

import {client} from "./lib/client";
import {buildQuery} from "./utils";

interface GetPropertyParams {
  query: string;
  category: string;
  agent: string;
}

export const getCategory = async () => {
  try {
    const category = await client.fetch(
      groq`*[_type == "category"]{
            _id,
            name,
            slug,
            image{
              _key,
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          }`
    );
    return category;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAgent = async () => {
  try {
    const agent = await client.fetch(
      groq`*[_type == "agent"]{
                _id,
                name,
                slug,
                username,
                email,
                phone,
                address,
                image{
                  _key,
                  asset->{
                    url,
                    metadata
                  },
                  hotspot,
                  crop
                },
                website,
                tags
            }`
    );
    return agent;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProperties = async (params: GetPropertyParams) => {
  const {query, category, agent} = params;

  try {
    const properties = await client.fetch(
      groq`${buildQuery({
        type: "property",
        query,
        category,
        agent,
      })}{
          _id,
          title,
          slug,
          description,
          price,
          bedrooms,
          bathrooms,
          area,
          'category': category->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          'agent': agent->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          location{
            address,
            city,
            state,
            zipCode,
            lat,
            lng
          },
          mainImage{
            asset->{
                url,
                metadata
            },
            hotspot,
            crop
          },
          image[]{
            _key,
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          },
          status
        }`
    );

    return properties;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProperty = async (id: string) => {
  try {
    const property = await client.fetch(
      groq`*[_type == "property" && _id == "${id}"]{
          _id,
          title,
          slug,
          description,
          price,
          bedrooms,
          bathrooms,
          area,
          'category': category->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          'agent': agent->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          location{
            address,
            city,
            state,
            zipCode,
            lat,
            lng
          },
          mainImage{
            asset->{
                url,
                metadata
            },
            hotspot,
            crop
          },
          image[]{
            _key,
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          },
          status,
          features
        }[0]`
    );

    const relatableProperty = await client.fetch(
      groq`${buildQuery({
        type: "property",
        category: property.category.slug.current,
      })}{
        _id,
          title,
          slug,
          description,
          price,
          bedrooms,
          bathrooms,
          area,
          'category': category->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          'agent': agent->{
            ...,
            image{
              asset->{
                url,
                metadata
              },
              hotspot,
              crop
            }
          },
          location{
            address,
            city,
            state,
            zipCode,
            lat,
            lng
          },
          mainImage{
            asset->{
                url,
                metadata
            },
            hotspot,
            crop
          },
          image[]{
            _key,
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          },
          status
        }`
    );

    return {property, relatableProperty};
  } catch (error: any) {
    throw new Error(error);
  }
};
