import { useMutation, useQuery } from '@tanstack/react-query';

import { products } from '@/domain/products/service/products.service';

export const useProductListQuery = (config) => {
	return useQuery({
		queryKey: [config.queryKey],
		queryFn: async () => await products(),
		...config.options
	});
};
