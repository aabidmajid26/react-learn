import person from '../images/person.png';
import star from '../images/star.png';
export default function Card() {
    return (
        <div className='card'>
            <div className='photo'>
                <img id="sold-out" alt='' src={star}/>
                <img alt='' src={person} />
            </div>
            <div className='rating'>
                <img id='rating-img' alt='' src={star} />
                <span id='rating-details'>5.5[6] USA</span>
            </div>
            <p className='desc'>
                Life Lesson with K. Zaferes
            </p>
            <p className='price'>
                <strong>From $126</strong>/Person
            </p>


        </div>
    )
}