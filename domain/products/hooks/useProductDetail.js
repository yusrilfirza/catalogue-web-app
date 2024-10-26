import { useMemo, useEffect, useState } from "react";
import { useProductDetailQuery } from "./query/product.query";
import { variantByCategory } from "../constant";

export const useProductDetail = () => {
    const [variant, setVariant] = useState([]);
    const {
        data, isLoading, isFetching
    } = useProductDetailQuery({
        queryKey: 'useProductDetail',
        options: {
            initialData: null
        },
    });

    useEffect(() => {
        if (data?.category) {
            const { category } = data;
    
            setVariant(getProductVariantFromCategory(category));
        }
    }, [data]);

    return useMemo(() => ({
        data,
        variant,
        isLoading,
        isFetching
    }), [data, isFetching, variant]);
};

const getProductVariantFromCategory = (category) => {
    let result = [];
    const categories = Object.keys(variantByCategory);

    categories.every((categoryOption) => {
        if (category.includes(categoryOption)) {
            result = variantByCategory[categoryOption];
            return false;
        }
        return true;
    });

    return result;
}