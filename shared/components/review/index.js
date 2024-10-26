import Comment from "../comment";

export default function Review(props) {
    const { data } = props;

    return (
        <>
            <h2>Review</h2>
            {
                data.map((review) => (
                    <Comment data={review} />
                ))
            }
        </>
    )
}