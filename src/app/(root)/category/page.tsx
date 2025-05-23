import {getCategory} from "@/sanity/actions";

import CategoryCard from "./_components/category-card";

export const metadata = {
  title: "Categories",
};

const CategoriesPage = async () => {
  const category = await getCategory();

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {category?.length > 0 ? (
          category.map((cat: any) => (
            <CategoryCard
              key={cat._id}
              name={cat.name}
              image={cat.image}
              slug={cat.slug}
            />
          ))
        ) : (
          <p>No category found</p>
        )}
      </div>
    </section>
  );
};

export default CategoriesPage;
