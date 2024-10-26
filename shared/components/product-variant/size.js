import Radio from "../input/radio";

export default function SizeVariantRadio(props) {
    const { options, value, onCheck } = props;
    return (
        <div>
            <label>Size</label>
            <div className="variant-wrapper">
                {
                    options.map((size) => (
                        <div className="input-variant-size">
                            <Radio
                                variant="size"
                                isChecked={value === size}
                                value={size}
                                onCheck={(value) => onCheck(value)}
                            />
                            <label>{size.toUpperCase()}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}