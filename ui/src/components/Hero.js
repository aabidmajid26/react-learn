import heroImg from '../images/hero-img.png';


export default function Hero() {
    return (
        <section className='hero'>
            <img id='hero-img' src={heroImg} alt='hero'/>
            <h1 id='hero-title'>Online Experiences</h1>
            <p id='hero-text'>Join unique interactive activities led by one-of-a-kind hosts - 
                all without leaving home.</p>
        </section>
    )
}