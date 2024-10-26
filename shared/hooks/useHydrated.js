import { useEffect, useState } from 'react';

export function useHydrated() {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		setHydrated(true);
	}, [hydrated]);

	return hydrated;
}