import "./App.css";
import React from "react";
import Speech from "react-speech";

class App extends React.Component{
  state = {
    video: "",
  };

  componentDidMount() {

    fetch("https://vimeo.com/api/oembed.json?url=https://vimeo.com/136392292")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          video: data,
        })
      );
  }

  render() {
    
    if (this.state.video) {
 
      return (
        console.log(this.state.video),
        <div className="App">
          <iframe
            title="video"
            src="https://player.vimeo.com/video/136392292"
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://vimeo.com/136392292">
              The Knocks &quot;Collect My Love&quot; featuring Alex Newell
            </a>{" "}
            from <a href="https://vimeo.com/austinpeters">Austin Peters</a> on{" "}
            <a href="https://vimeo.com">Vimeo</a>.
          </p>
          <Speech
            textAsButton={true}
            displayText="listen to title"
            text={this.state.video.title}
          />
          <Speech
            textAsButton={true}
            displayText="listen to description"
            text={this.state.video.description}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default App;
