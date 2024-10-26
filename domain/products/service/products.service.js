import { getRequest } from '@/shared/libs/http';

export const getProducts = async () => {
	try {
		return await getRequest({
			url: `/posts`,
		});
	} catch (error) {
		throw new Error(error?.response?.data?.message);
	}
};


export const getProductDetail = async (payload) => {
	try {
		return await getRequest({
			url: `/comments`,
		});
	} catch (error) {
		throw new Error(error?.response?.data?.message);
	}
};
