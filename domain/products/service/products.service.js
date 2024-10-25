import { getRequest, postRequest } from '@/shared/libs/http';

export const products = async (payload) => {
	try {
		return await getRequest({
			url: `/posts`,
			data: payload,
		});
	} catch (error) {
		throw new Error(error?.response?.data?.message);
	}
};
