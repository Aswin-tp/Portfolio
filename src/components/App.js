import React, { Component } from'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/aswin4.jpg';
import Title from './Title';


class App extends Component {
    state = {displayBio: false };
  //  constructor() {
  //      super();
  //      this.state = { displayBio: false };
  //      console.log('component this', this)
  //  this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
   // }

toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio})
}

render() {
return (
    <div>
        <img src={profile} alt='profile pic' className='profile'></img>
        <h1> Hello</h1>
        <p> My name is Aswin</p>
        <Title />
        <p>Im always looking forward to work on meaningful projects</p>
        {
        this.state.displayBio ? (
        <div> 
            <p> I live in Calicut and code everyday </p>
            <p> My favorite language is Java, and I think ReactJS is awesome</p>
            <p> besides coding I love music and games</p>
            <button onClick={this.toggleDisplayBio}> Show Less</button>
        </div>
    ) : (
        <div> 
            <button onClick={this.toggleDisplayBio}> Read More</button>
        </div>
    ) 
    }
    <hr />
    <Projects />
    <SocialProfiles />
    </div>
)
}
}

// const AppWithHeader = () => {
//     return (
//         <Header Component={App} />
//     )
// }

export default App;