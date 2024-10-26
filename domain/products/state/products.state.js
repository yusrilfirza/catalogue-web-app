import { create } from 'zustand';

export const useProductListState = create(
	(set) => ({
		productDataList: [],
        category: null,
        sortBy: null,
        currentPage: 1,
        totalData: 0,
        limitDataPerPage: 8,
		setProductDataList(data) {
			set(() => ({
                productDataList: data,
            }));
		},
        setCategory(category) {
			set(() => ({ category }));
		},
        setSortBy(sortBy) {
			set(() => ({ sortBy }));
		},
        setCurrentPage(page) {
            set(() => ({ currentPage: page }));
        },
        setTotalData(totalData) {
			set(() => ({ totalData }));
		},
	})
);