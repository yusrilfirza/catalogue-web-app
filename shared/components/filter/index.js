import { useState } from 'react';
import DropdownSort from '../dropdown/sort';

const category = ['All Category', 'Mens', 'Jawelry'];

export default function Filter(props) {
    const [activeFilter, setActiveFilter] = useState('All Category');
    return (
        <section id="filter-wrapper">
            <div id="category-filter">
                {
                    category.map((item, index) => (
                        <button
                            type="button"
                            key={`category_${index}`}
                            className={`category-item ${activeFilter === item ? 'active' : ''}`}
                            onClick={() => setActiveFilter(item)}
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
            <DropdownSort />
        </section>
    )
}