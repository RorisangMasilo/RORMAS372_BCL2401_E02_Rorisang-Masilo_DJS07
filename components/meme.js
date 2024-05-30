import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">
                        <input id="top-text" type="text" placeholder="Hoe opp" className="form--input"></input>
                    </label>
                </div>
                <div>
                    <label>
                        <input id="bottom-text" type="text" placeholder="en vat my geld" className="form--input"></input>
                    </label>
                </div>
                <button className="form--button">Get a new meme image</button>
            </form>
        </main>
    ),
}