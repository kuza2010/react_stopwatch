import React, {Component} from 'react';
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
import ButtonsBelt from "./components/buttons-belt";
import MyButton from "./components/button";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stopwatchIsVisible: true,
        }
    }

    onClick = () => {
        this.setState(state => {
            return {
                stopwatchIsVisible: !state.stopwatchIsVisible,
            };
        });
    }

    render() {
        const {stopwatchIsVisible} = this.state;

        const controlBtn = <MyButton title={stopwatchIsVisible ? "Hide" : "Show"}
                                     icon={stopwatchIsVisible ? null : "remove_red_eye"}
                                     onSubmit={this.onClick}/>;

        const stopwatch = stopwatchIsVisible
            ? <Stopwatch/>
            : null;

        return (
            <div className="container">
                <Header title="Stopwatch"/>
                {stopwatch}
                <ButtonsBelt>
                    {controlBtn}
                </ButtonsBelt>
            </div>
        );
    }
}

export default App;
