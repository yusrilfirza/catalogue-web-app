import { useState } from "react";
import Radio from "../input/radio";
import ColorVariantRadio from "./color";
import SizeVariantRadio from "./size";

export default function ProductVariant(props) {
    const { data } = props;
    const [checkedColor, setCheckedColor] = useState(null);
    const [checkedSize, setCheckedSize] = useState(null);

    return (
        <div id="product-variant">
            {
                data.map((item) => item.type === 'color' ? (
                    <ColorVariantRadio options={item.options} value={checkedColor} onCheck={(value) => setCheckedColor(value)} />
                ) : (<SizeVariantRadio options={item.options} value={checkedSize} onCheck={(value) => setCheckedSize(value)} />))
            }
        </div>
    )
}