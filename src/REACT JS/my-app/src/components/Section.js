import {Component} from "react";
const estilCOntent = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
}


class Section extends Component {
    render() {
        return(
            <div>
                <h1 style={estilCOntent}>Style Object</h1>
            </div>
        )
    }
}

export default Section;