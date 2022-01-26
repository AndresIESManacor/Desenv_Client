import Header from './components/Header.js'
import Footer from './components/Footer.js'
import {Component} from "react";
import Section from "./components/Section.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default App;
