export const sortOptions = [
    {
        label: 'Highest Price First',
        value: 1,
        extra: {
            order: 'desc',
            by: 'price'
        }
    },
    {
        label: 'Lowest Price First',
        value: 2,
        extra: {
            order: 'asc',
            by: 'price'
        }
    },
    {
        label: 'Highest Rating',
        value: 3,
        extra: {
            order: 'desc',
            by: 'rate'
        }
    },
];

export const categoryOptions = ['All Category', "Men's Clothing", 'Jewelery', 'Electronics']