import Filter from "@/shared/components/filter";
import ProductShowcase from "@/shared/components/product-showcase";

export default function Home() {
  return (
    <>
      <Filter />
      <section id="brand-tagline">
        <h1>All-In-One Shop</h1>
        <span>Shop with us. Saving more cash.</span>
      </section>
      <section id="product-showcase">
        <ProductShowcase />
      </section>
    </>
  );
}
