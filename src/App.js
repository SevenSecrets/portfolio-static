import React, { Component } from 'react';
import Project from './components/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Freddie Smith Hughes</h1>
        <div className="socials">
          <a href="https://www.linkedin.com/in/freddie-smith-hughes-55598519b/" target="_blank"  rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          <a href="https://github.com/SevenSecrets" target="_blank"  rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a>
        </div>
        <div className="about">
          <h2>About Me</h2>
          <p>Hi! Nice to meet you! My name is Freddie Smith Hughes and I'm a Software Developer and graduate of Makers Academy from London. I originally graduated with an undergraduate degree in History from the University of Kent, but decided to make a pretty radical change in career direction and did a software development bootcamp.</p>
          <p>I've been very into programming and development since I was a teenager, starting with making a few games in Flash when I was 13 and moving on to learning Python as I got older. My interest in software development now is a continuation of that childhood passion. I hope you like some of what I've made.</p>
        </div>
        <div className="Projects">
          <h2>My Projects</h2>
          <Project name="Project Greenprint" description="GreenPrint is an app built as my team's final project for Makers Academy, intended to help you calculate and monitor the amount of carbon your travel produces on a per journey basis. If you enter two locations in the form below the app will generate several routes by mode of travel (driving, public transport, walking, and cycling). You can also calculate the carbon footprint for air travel." siteLink="https://project-greenprint.herokuapp.com/" gitHubLink="https://github.com/SevenSecrets/Project_Greenprint_Backend" />
          <Project name="Go REST" description="Teaching myself how to use Golang to make a REST API using gin. Currently spits out random quotes from a couple of authors. Uses a locally hosted postgresql database of quotes for the moment, to help me teach myself about how to use postgresql with Go (and how to use databases with Go more generally)" gitHubLink="https://github.com/SevenSecrets/go-rest" />
          <Project name="Weather Reminders" description="This Ruby app texts me to tell me what the weather is like, including temperature, rain, and UV index. The app currently runs on Heroku and is pinged by a Telegram bot every time someone messages it, responding with the sorted data gathered from the Climacell API about the weather conditions at a location. If the user sends a location in the Telegram message then the weather returned is for that location, otherwise it defaults to Kentish Town." gitHubLink="https://github.com/SevenSecrets/weather-texts" />
          <Project name="Game Suggestions" description="An app where users can create polls where voters can suggest any games available on IGDB to play together. Built in React and bootstrapped with Create React App." gitHubLink="https://github.com/SevenSecrets/game-suggestions" />
          <Project name="Greenprint Mobile" description="The mobile app for Project Greenprint, which was originally built as a final project for Makers Academy with a team, but is now being turned into a mobile app as a personal project for me while using the existing backend. I built it to teach myself how to use React Native. This app has all of the basic function of Project Greenprint, but does not include the ability to log and save journeys yet." gitHubLink="https://github.com/SevenSecrets/greenprint-mobile" />
          <Project name="Ev Nettles/Bog Nettles" description="A single page article for a friend to host their guide on how to make nettle cordage, since the people who originally hosted it didn't know how to build a website properly and made it almost entirely unreadable. Listed here to demonstrate my ability to create a frontend project according to a specification given to me by a non-technical person." siteLink="https://amazing-hawking-5e336d.netlify.app/" gitHubLink="https://github.com/SevenSecrets/ev-nettles" />
          <Project name="Portfolio" description="This site right here! It's a static React site built using create-react-app, although I also have an alternative version which uses a MERN stack, just to show off a bit. This version is lighter, less intensive, and more mobile-friendly though, so I tend to use it instead." gitHubLink="https://github.com/SevenSecrets/portfolio-static" />
        </div>
      </div>
    );
  }
}

export default App;