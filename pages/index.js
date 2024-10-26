import Filter from "@/shared/components/filter";
import ProductShowcase from "@/shared/components/product-showcase";
import { useProductList } from "@/domain/products/hooks/useProductList";

export default function Home() {
  const {
    productDataList, transformProductDataList, truncateProductDataList,
    category, sortBy, currentPage, totalData, limitDataPerPage,
  } = useProductList();

  return (
    <>
      <Filter transformData={transformProductDataList} category={category} sortBy={sortBy} />
      <section id="brand-tagline">
        <h1>All-In-One Shop</h1>
        <span>Shop with us. Saving more cash.</span>
      </section>
      <section id="product-showcase">
        <ProductShowcase
          data={productDataList}
          truncateProductDataList={truncateProductDataList}
          currentPage={currentPage}
          totalData={totalData}
          limitDataPerPage={limitDataPerPage}
        />
      </section>
    </>
  );
}
