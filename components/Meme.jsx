/* eslint-disable no-unused-vars */
import React from "react";
import memesData from "/memesData.jsx";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function fetchMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    fetchMemes();
  }, []);

  function getMemeImage(event) {
    event.preventDefault();
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <div>
          <label htmlFor="top-text">
            <input
              id="top-text"
              type="text"
              placeholder="Hoe opp"
              className="form--input"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="bottom-text">
            <input
              id="bottom-text"
              type="text"
              placeholder="en vat my geld"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <img src={meme.randomImage} alt="Meme" />
    </main>
  );
}
