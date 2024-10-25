export default function Rate(props) {
    const { rate } = props;

    return (
        <div className="product-rate">
            {
                new Array(5).fill('').map(( _, index) => {
                    const decimalRate = Math.floor(rate);
                    const decimalPortion = rate - decimalRate;
                    const rateFill = (index + 1) <= decimalRate ? 100 : Math.floor((1 - decimalPortion) * 100);
                    const starId = Math.random()
                    let pathFill = '#ffae00';

                    if (rateFill < 100 && (index + 1) - decimalRate <= 1) pathFill = `url(#${`star-color-${starId}`})`
                    else if ((index + 1) - decimalRate > 1) pathFill = '#c3c3c3'

                    return (
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="star">
                            <defs>
                                <linearGradient id={`star-color-${starId}`}>
                                    <stop offset="0%" stopColor="#ffae00" />
                                    <stop offset={`${rateFill}%`} stopColor="#ffae00" />
                                    <stop offset={`${rateFill}%`} stopColor="#c3c3c3" />
                                    <stop offset="100%" stopColor="#c3c3c3" />
                                </linearGradient>
                            </defs>
                            <path fill={pathFill} d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" />
                        </svg>
                    )
                })
            }
        </div>
    )
}