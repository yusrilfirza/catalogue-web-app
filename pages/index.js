import { useEffect } from "react";
import { useProductList } from "@/domain/products/hooks/mutation/useProducts";
import Filter from "@/shared/components/filter";
import ProductShowcase from "@/shared/components/product-showcase";
import { queryOptions } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Home() {
  const { query, replace } = useRouter();
  const {
    data, isLoading
  } = useProductList({
    queryKey: 'useProductList',
    options: {
      initialData: []
    }
  });

  const handleFilter = () => {

  };

  return (
    <>
      <Filter onSubmit={handleFilter} />
      <section id="brand-tagline">
        <h1>All-In-One Shop</h1>
        <span>Shop with us. Saving more cash.</span>
      </section>
      <section id="product-showcase">
        <ProductShowcase data={data} />
      </section>
    </>
  );
}
