import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'
import Notification from './components/Notification'

const words = ['programming', 'coding', 'github', 'stackoverflow']
let selectedWord = words[Math.floor(Math.random()*words.length)]

function App() {

    const[playable, setPlayable] = useState(true)
    const[correctLetters, setCorrectLetters] = useState([])
    const[wrongLetters, setWrongLetters] = useState([])
    const[showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const handleKeydown = event => {
            const {key, keyCode} = event
            if(playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
            }
        }
        window.addEventListener('keydown', handleKeydown)
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [correctLetters, wrongLetters, playable])

    return (
        <>
            <Header />
            <div className = "game-container">
                <Figure wrongLetters = {wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
            </div>
        </>
    );
}

export default App
