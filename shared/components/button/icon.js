export default function IconButton(props) {
    const { icon: Icon, onClick = () => {}, disabled = false } = props;

    return (
        <button id="icon-button" onClick={onClick} disabled={disabled} >
            {
                <Icon />
            }
        </button>
    )
}