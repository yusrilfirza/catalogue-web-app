import Comment from "../comment";

export default function Review(props) {
    const { data } = props;
    console.log(data);
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