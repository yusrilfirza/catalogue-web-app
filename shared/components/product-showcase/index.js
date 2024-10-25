import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../pagination';
import Rate from '../rate';

export default function ProductShowcase(props) {
    const { data = [] } = props
    return (
        <>
            <div id="product-showcase-wrapper">
                {
                    data.map((item) => (
                        <div key={`product-${item.id}`} className="product-item">
                            <Link href={`/product/${item.id}`} className="product-image">
                                <Image
                                    src={item.image}
                                    width={150}
                                    height={150}
                                    style={{
                                        objectFit: "contain"
                                    }}
                                />
                            </Link>
                            <div className="product-card-header">
                                <h3 className="title">{item.title}</h3>
                                <div className="product-price">
                                    <h3 className="dollar-symbol">$</h3>
                                    <h3>{item.price}</h3>
                                </div>
                            </div>
                            <div>
                                <h4 className="product-description">{item.description}</h4>
                            </div>
                            <Rate rate={item.rating.rate} />
                        </div>
                    ))
                }
            </div>
            <div id="product-showcase-pagination">
                <Pagination />
            </div>
        </>
    )
}