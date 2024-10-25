import { useState } from 'react';
import DropdownSort from '../dropdown/sort';
import { categoryOptions } from '@/domain/products/constant';

export default function Filter(props) {
    const { transformData, category, sortBy } = props;
    const [activeFilter, setActiveFilter] = useState('All Category');

    return (
        <section id="filter-wrapper">
            <div id="category-filter">
                {
                    categoryOptions.map((item, index) => (
                        <button
                            type="button"
                            key={`category_${index}`}
                            className={`category-item ${activeFilter === item ? 'active' : ''}`}
                            onClick={() => {
                                setActiveFilter(item);
                                transformData(item, sortBy);
                            }}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
            <DropdownSort transformData={(sortValue) => transformData(category, sortValue)} />
        </section>
    )
}