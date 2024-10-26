export default function Radio(props) {
    const { variant, isChecked = false, value, onCheck } = props;

    return (
        <div className="input-radio-wrapper">
            <input id={`radio-${value}`} type="radio" checked={isChecked} onChange={() => onCheck(value)} />
            <span className="checkmark" variant={variant} radioColor={value}>{}</span>
        </div>
    )
}