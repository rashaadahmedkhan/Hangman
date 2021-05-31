import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'

const words = ['programming', 'coding', 'github', 'stackoverflow']
let selectedWord = words[Math.floor(Math.random()*words.length)]

function App() {

    const[playable, setPlayable] = useState(true)
    const[correctLetters, setCorrectLetters] = useState([])
    const[wrongLetters, setWrongLetters] = useState([])
    const[showNotification, setShowNotification] = useState(false)

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
