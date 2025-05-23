import {defineField, defineType} from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "area",
      title: "Area (sq ft)",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "category"}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "agent",
      title: "Agent",
      type: "reference",
      to: [{type: "agent"}],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        {name: "address", title: "Address", type: "string"},
        {name: "city", title: "City", type: "string"},
        {name: "state", title: "State", type: "string"},
        {name: "zipCode", title: "Zip Code", type: "string"},
        {name: "lat", title: "Latitude", type: "number"},
        {name: "lng", title: "Longitude", type: "number"},
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Images",
      type: "array",
      of: [{type: "image", options: {hotspot: true}}],
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{type: "string"}],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          {title: "For Sale", value: "for-sale"},
          {title: "For Rent", value: "for-rent"},
          {title: "Sold", value: "sold"},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
