import GhostButton from "./ghost";
import IconButton from "./icon";

const buttonVariant = {
    icon: (props) => <IconButton {...props} />,
    ghost: (props) => <GhostButton {...props} />
}

export default function Button(props) {
    const { variant, children } = props;

    try {
        return buttonVariant[variant](props)
    } catch {
        return <button {...props}>{children}</button>
    }
}