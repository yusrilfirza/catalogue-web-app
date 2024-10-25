import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';

const options = [
    {
        label: 'Name A to Z',
        value: 'name-asc'
    },
    {
        label: 'Name Z to A',
        value: 'name-desc'
    },
    {
        label: 'Highest Rating',
        value: 'rate-desc'
    },
    {
        label: 'Lowest Rating',
        value: 'rate-asc'
    }
];

export default function DropdownSort(props) {
    return (
        <div id="dropdown-sort">
            <div id="dropdown-sort-label">
                <span>Sort By</span>
                <UilAngleDown size={16} />
            </div>
            <div id="dropdown-sort-option-wrapper">
                {
                    options.map((option) => (
                        <a className="dropdown-sort-option">{option.label}</a>
                    ))
                }
            </div>
        </div>
    )
}