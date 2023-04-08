import Joke from "./Joke";


export default function App() {

    const joke = [
        {
            'question': 'How did the hacker escape the police?',
            'punchline': 'IDK! He must have ransomware!'
        },
        {
            'question': "What's the best thing about Switzerland?",
            'punchline': "I don't know, but the flag is a big plus!"
        }

    ]
    
    return (
        <div>
            <p id="header">Dad Jokes!</p>
            <Joke
                joke={joke[0]}
                id='0'
            />
            <Joke
                joke={joke[1]}
                id='1'
            />
        </div>
    )
}