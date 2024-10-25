import { useMutation } from '@tanstack/react-query';

import { products } from '@/domain/products/service/products.service';

export const useProductList = (config) => {
	return useMutation({
		mutationFn: async (payload) => {
			return await products(payload);
		},

		...config?.mutationOptions,
	});
};
