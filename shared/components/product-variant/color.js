import Radio from "../input/radio";

export default function ColorVariantRadio(props) {
    const { options, value, onCheck } = props;
    return (
        <div>
            <label>Color</label>
            <div className="variant-wrapper">
                {
                    options.map((color) => (
                        <Radio
                            variant="color"
                            isChecked={value === color}
                            value={color}
                            onCheck={(value) => onCheck(value)}
                        />
                    ))
                }
            </div>
        </div>
    )
}