import Rating from "./Rating.js";
import '../styles/post.scss';

const Post = ({postData}) => {
    const {
        id,
        image,
        bonusText,
        description,
        moneyBonus,
        detailLink,
        mark,
        visitLink,
        rate
    } = postData;

    return (
        <div className="post">
            <div className="post__img">
                <img src={image} alt="Img"/>
            </div>

            <div className="post__content-block">
                <div className="post__text-block">
                    <h3>{bonusText}</h3>
                    <p>
                        {description}
                        <button>More</button>
                    </p>
                </div>
                <p className="post__bonus">
                    {moneyBonus}
                </p>
                <div className="post__rating-block">
                    <p>Rate it! (5373)</p>
                    <Rating postId={id} currentValue={rate}/>
                    <a href={detailLink} target="_blank" rel="noreferrer">Read Review</a>
                </div>
                <div className="post__mark">
                    {mark}
                </div>
                <a href={visitLink} className="post__btn-link" target="_blank" rel="noreferrer">
                    Visit site
                </a>
            </div>
        </div>


    )
};

export default Post;