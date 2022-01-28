import {Component} from "react";
import './Clicker.css';

class ButtonClick extends Component {
    constructor(props) {
        super();
        this.state = {
            contador: props.contador
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }
    incrementCount() {
        this.setState((countBefore) => ({ contador: countBefore.contador + 1 }));
    }

    decrementCount() {
        this.setState((countBefore) => ({ contador: countBefore.contador - 1 }));
    }

    resetCount() {
        this.setState(() => ({ contador: 0 }));
    }
    render(props) {
        return(
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="clicker-display d-flex align-items-center bg-light text-secondary">
                        <div className="mx-auto display-1">{this.state.contador}</div>
                    </div>
                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={this.incrementCount}>
                            <i className="fa fa-plus fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-100" onClick={this.resetCount}>
                            <i className="fa fa-refresh fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100" onClick={this.decrementCount}>
                            <i className="fa fa-minus fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
ButtonClick.defaultProps = {
    contador: 0
};
export default ButtonClick;