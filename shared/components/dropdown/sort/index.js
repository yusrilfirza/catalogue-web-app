import { useState } from 'react';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import { sortOptions } from '@/domain/products/constant';

export default function DropdownSort(props) {
    const [sortLabel, setSortLabel] = useState('Sort By');
    const { transformData } = props;

    return (
        <div id="dropdown-sort">
            <div id="dropdown-sort-label">
                <span>{sortLabel}</span>
                <UilAngleDown size={16} />
            </div>
            <div id="dropdown-sort-option-wrapper">
                {
                    sortOptions.map((option) => (
                        <a
                            key={`option_${option.value}`}
                            onClick={() => {
                                transformData(option.value);
                                setSortLabel(option.label);
                            }}
                            className="dropdown-sort-option"
                        >
                            {option.label}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}