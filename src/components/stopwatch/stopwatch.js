import React, {Component} from "react";
import moment from "moment";
import MyButton from "../button";
import ButtonsBelt from "../buttons-belt";

export default class Stopwatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            timerId: -1,
            date: moment("2020-06-06 00:00:00"),
        };
    }

    tick = () => {
        this.setState(state => {
            return {
                date: state.date.add(1, 'seconds'),
            };
        });
    }


    stopStopwatch = () => {
        this.cleanTimer();
        this.setState({
            isActive: false,
        });
    }

    startStopwatch = (continueTimer = false) => {
        if (!continueTimer) {
            this.cleanStopwatch();
            this.cleanTimer();
        }
        const id = setInterval(this.tick, 1000);
        console.log("timer id: ", id);
        this.setState({
            isActive: true,
            timerId: id,
        });
    }

    restartStopwatch = () => {
        this.cleanTimer();
        this.cleanStopwatch();
        this.startStopwatch();
    }


    cleanTimer = () => {
        const {timerId} = this.state;
        console.log("clear timer with id: ", timerId);
        clearInterval(timerId);
        this.setState({
            timerId: -1,
        })
    }

    cleanStopwatch = () => {
        this.setState({
            date: moment("2020-06-06 00:00:00"),
        });
    }

    componentDidMount() {
        this.startStopwatch();
    }

    componentWillUnmount() {
        this.cleanTimer();
    }

    render() {
        const {date, isActive} = this.state;

        const controlBtn = <MyButton title={isActive ? "Stop" : "Start"}
                                     icon={isActive ? "stop" : "play_arrow"}
                                     onSubmit={() => {
                                         isActive
                                             ? this.stopStopwatch()
                                             : this.startStopwatch(true)
                                     }}/>;

        const restartBtn = <MyButton title="Restart"
                                     icon="repeat"
                                     onSubmit={this.restartStopwatch}/>

        return (
            <div className="row">
                <div className="col s12">
                    <span className="center">
                        <h2>{date.format("mm:ss")}</h2>
                    </span>
                </div>
                <div className="col s12">
                    <ButtonsBelt>
                        {controlBtn}
                        {restartBtn}
                    </ButtonsBelt>
                </div>
            </div>
        )
    }
}