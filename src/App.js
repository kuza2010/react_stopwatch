import React, {Component} from 'react';
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
import ButtonsBelt from "./components/buttons-belt";
import MyButton from "./components/button";
import LifecyclePage from "./components/lifecycle-page";
import moment from "moment";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stopwatchIsVisible: true,
            events: [],
            count: 0,
        };
    }

    onAddEvent = (eventName) => {
        this.setState(({events, count}) => {
            return {
                events:
                    [
                        {
                            number: count + 1,
                            name: eventName,
                            timestamp: moment().format("HH:mm:ss:SSS")
                        },
                        ...events,
                    ],
                count: count + 1,
            };
        });
    }

    onClick = () => {
        this.setState(state => {
            return {
                stopwatchIsVisible: !state.stopwatchIsVisible,
            };
        });
    }

    onClearEvents = () => {
        this.setState({
            events: [],
            count: 0,
        });
    }

    stopwatchDidMount = () => {
        this.onAddEvent("stopwatchDidMount");
    }

    stopwatchDidUpdate = () => {
        this.onAddEvent("stopwatchDidUpdate");
    }

    stopwatchWillUnmount = () => {
        this.onAddEvent("stopwatchWillUnmount");
    }


    render() {
        const {stopwatchIsVisible, events} = this.state;

        const controlBtn = <MyButton title={stopwatchIsVisible ? "Hide" : "Show"}
                                     icon={stopwatchIsVisible ? null : "remove_red_eye"}
                                     onSubmit={this.onClick}/>;

        const stopwatch = stopwatchIsVisible
            ? <Stopwatch stopwatchDidMount={this.stopwatchDidMount}
                         stopwatchDidUpdate={this.stopwatchDidUpdate}
                         stopwatchWillUnmount={this.stopwatchWillUnmount}/>
            : null;

        return (
            <div className="container">
                <Header title="Stopwatch"/>
                {stopwatch}
                <ButtonsBelt>
                    {controlBtn}
                </ButtonsBelt>
                <LifecyclePage events={events}
                               onClearEvents={this.onClearEvents}/>
            </div>
        );
    }
}

export default App;
