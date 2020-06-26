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
            const newDate = moment(state.date).add(1, 'seconds');
            return {
                date: newDate,
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

    shouldComponentUpdate(nextProps, nextState) {
        const {timerId, date} = this.state;
        const {timerId: nextTimerId, date: nextDate} = nextState;

        return !(timerId === nextTimerId && date.get('second') === nextDate.get('second'));
    }

    componentDidMount() {
        const {stopwatchDidMount} = this.props;

        this.startStopwatch();
        stopwatchDidMount();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        const {stopwatchDidUpdate} = this.props;
        stopwatchDidUpdate();
    }

    componentWillUnmount() {
        this.cleanTimer();
        const {stopwatchWillUnmount} = this.props;
        stopwatchWillUnmount();
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