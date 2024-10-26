export default function GhostButton(props) {
    const { label = '', onClick = () => {}, disabled = false } = props;

    return (
        <button id="ghost-button" onClick={onClick} disabled={disabled} >
            {
                label
            }
        </button>
    )
}