import { useProductDetail } from "@/domain/products/hooks/useProductDetail";
import ProductVariant from "@/shared/components/product-variant";
import Rate from "@/shared/components/rate";
import Review from "@/shared/components/review";
import Image from "next/image";
import Loading from '@/shared/components/loading';

export default function ProductDetail(props) {
    const { data, isLoading, isFetching, variant } = useProductDetail();

    return (
        <section id="product-detail">
            {
                isFetching ? (
                    <Loading />
                ) : (
                    <>
                        <div id="product-detail-wrapper">
                            <div id="product-detail-column">
                                <div className="product-image" id="product-detail-image">
                                    <Image
                                        src={data.image}
                                        width={400}
                                        height={400}
                                        style={{
                                            objectFit: "contain"
                                        }}
                                        alt={`product-${data.id}`}
                                    />
                                </div>
                                <div id="product-content">
                                    <h1>
                                        {data.title}
                                    </h1>
                                    <div className="product-detail-sub-title">
                                        <div className="product-price">
                                            <h3 className="dollar-symbol">$</h3>
                                            <h3>{data.price}</h3>
                                        </div>
                                        <Rate rate={data.rating.rate} />
                                    </div>
                                    <p id="product-detail-description">
                                        {data.description}
                                    </p>
                                    <ProductVariant data={variant} />
                                </div>
                            </div>
                            <div id="product-detail-column">
                                <div id="product-review-wrapper">
                                    <Review data={data.reviews} />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
}