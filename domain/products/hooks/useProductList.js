import { useMemo, useEffect } from "react";
import { useProductListQuery } from "./query/product.query";
import { useProductListState } from "../state/products.state";
import { getSortOptionValue } from "@/shared/utils/getSortOptionValue";
import { sortOptions } from "../constant";

export const useProductList = () => {
    const {
        data, isLoading
    } = useProductListQuery({
        queryKey: 'useProductList',
        options: {
            initialData: []
        },
    });

    const {
        productDataList, setProductDataList, category, sortBy, setCurrentPage,
        setCategory, setSortBy, currentPage, totalData, setTotalData, limitDataPerPage
    } = useProductListState((state) => state);

    const truncateProductDataList = (page, productData = data) => {
        setCurrentPage(page);
        const truncattedData = productData.slice(0 + ((page - 1) * limitDataPerPage), limitDataPerPage + ((page - 1) * limitDataPerPage));
        setProductDataList(truncattedData);
        return truncattedData;
    }

    const transformProductDataList = (category, sort) => {
        let newData = data;
        if (category !== null) {
            setCategory(category)
            newData = filterData(category, newData);
        }
        if (sort !== null) {
            const { order, by } = getSortOptionValue(sort, sortOptions);
            setSortBy(sort);
            newData = sortData(order, by, newData);
        }

        setProductDataList(truncateProductDataList(1, newData));
        setTotalData(newData.length);
        setCurrentPage(1);
    }

    useEffect(() => {
        truncateProductDataList(currentPage);
        setTotalData(data.length);
    }, [data]);
    
    return useMemo(() => ({
        productDataList,
        transformProductDataList,
        truncateProductDataList,
        category,
        sortBy,
        currentPage,
        totalData,
        limitDataPerPage
    }), [data, productDataList]);
}

const filterData = (category, productDataList) => {
    return category === 'All Category'
        ? productDataList
        : productDataList.filter((productItem) => productItem.category === category.toLowerCase());
}

const sortData = (order, by, data) => {
    return data.sort((a, b) => {
        if (by === 'price') return order === 'asc' ? a[by] - b[by] : b[by] - a[by]
        else return order === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
    })
};
