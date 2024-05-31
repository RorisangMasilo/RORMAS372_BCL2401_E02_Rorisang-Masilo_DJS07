import React from "react"
import memesData from "../memesData.js"
"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i/imgflip.com/1bij.jpg"
    })
    const [setAllMemes, setAllMemes] = React.useState([])

    React.useEffect(async () => {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    // console.log(url)
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">
                        <input id="top-text" type="text" placeholder="Hoe opp" className="form--input"></input>
                    </label>
                </div>
                <div>
                    <label htmlFor="bottom-text">
                        <input id="bottom-text" type="text" placeholder="en vat my geld" className="form--input"></input>
                    </label>
                </div>
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>
    ),
}