import ReactTypingEffect from "react-typing-effect";

export default function IntroPage() {
  return (
    <div className="intro">
      <div className="intro-wrapper">
        <div>
          <ReactTypingEffect
            className="intro-title"
            speed={100}
            typingDelay={500}
            text={"Hey Hooman!"}
          />
        </div>
        <img className="intro-image" src={"assets/shiba.svg"} alt="" />
        <p className="intro-slogan">Watch Dogs! &#128526;</p>
      </div>
    </div>
  );
}

// Author of the shiba.svg below
//* <div>Icons made by <a href="" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
