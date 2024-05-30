import React from "react"
import memesData from "../memesData.js"
"

export default function Meme() {
    const [getMemeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // url = memesArray[randomNumber].url
    // console.log(url)
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