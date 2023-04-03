import person from '../images/person.png';
import star from '../images/star.png';
export default function Card() {
    return (
        <div className='card'>
            <div className='photo'>
                <img id="sold-out" src={star}/>
                <img src={person} />
            </div>
            <div className='rating'>
                <img id='rating-img' src={star} />
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