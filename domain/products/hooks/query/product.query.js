import { useQuery } from '@tanstack/react-query';
import { getProductDetail, getProducts } from '@/domain/products/service/products.service';

export const useProductListQuery = (config) => {
	return useQuery({
		queryKey: [config.queryKey],
		queryFn: async () => await getProducts(),
		...config.options
	});
};


export const useProductDetailQuery = (config) => {
	return useQuery({
		queryKey: [config.queryKey],
		queryFn: async () => await getProductDetail(),
		...config.options
	});
};
