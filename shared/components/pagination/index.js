import UilArrowRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import Button from "../button";

export default function Pagination(props) {
    const { truncateProductDataList, currentPage, totalData, limitDataPerPage } = props;

    return (
        <div id="pagination-wrapper">
            <Button variant="icon" icon={UilArrowLeft} onClick={() => truncateProductDataList(currentPage - 1)} disabled={currentPage === 1} />
            <Button variant="icon" icon={UilArrowRight} onClick={() => truncateProductDataList(currentPage + 1)} disabled={currentPage === Math.ceil(totalData / limitDataPerPage)} />
        </div>
    )
}