import {useState} from 'react'
import Star from './Star.js'
import '../styles/rating.scss';

const stars = [1, 2, 3, 4, 5].reverse();

const Rating = ({postId, currentValue}) => {
    const [currentRate, setRate] = useState(currentValue)

    const handleChangeRating = (value) => {
        setRate(value)
    }

    return(
    <div className="rating">
        <div className='rating__wrap'>
            {
                stars.map((star) => <Star key={`${postId}-star-${star}`} value={star} checked={star <= currentRate} onChange={handleChangeRating}/>)
            }
        </div>
    </div>
)};


export default Rating;