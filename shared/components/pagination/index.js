import UilArrowRight from '@iconscout/react-unicons/icons/uil-angle-right';
import UilArrowLeft from '@iconscout/react-unicons/icons/uil-angle-left';
import Button from "../button";

export default function Pagination(props) {
    return (
        <div id="pagination-wrapper">
            <Button variant="icon" icon={UilArrowLeft} />
            <Button variant="icon" icon={UilArrowRight} />
        </div>
    )
}