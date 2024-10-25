export default function IconButton(props) {
    const { children, icon: Icon } = props;

    return (
        <button id="icon-button">
            {
                <Icon />
            }
        </button>
    )
}