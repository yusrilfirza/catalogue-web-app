import Filter from "@/shared/components/filter";
import ProductShowcase from "@/shared/components/product-showcase";
import { useProductList } from "@/domain/products/hooks/useProductList";
import Loading from "@/shared/components/loading";

export default function Home() {
  const {
    productDataList, transformProductDataList, truncateProductDataList,
    category, sortBy, currentPage, totalData, limitDataPerPage, isFetching
  } = useProductList();

  return (
    <>
      <Filter transformData={transformProductDataList} category={category} sortBy={sortBy} />
      <section id="brand-tagline">
        <h1>All-In-One Shop</h1>
        <span>Shop with us. Saving more cash.</span>
      </section>
      <section id="product-showcase">
        {
          isFetching ? (
            <Loading />
          ) : (
            <ProductShowcase
              data={productDataList}
              truncateProductDataList={truncateProductDataList}
              currentPage={currentPage}
              totalData={totalData}
              limitDataPerPage={limitDataPerPage}
            />
          )
        }
      </section>
    </>
  );
}
