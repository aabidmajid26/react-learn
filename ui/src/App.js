import Profile from './components/Profile';
import Buttons from './components/Buttons';
import Body from './components/Body';


export default function App() {
    return (
        <div className='container'>
            <div className='small-container' >
                <Profile />
                <Buttons />
                <Body />
            </div>
        </div>
    )
}