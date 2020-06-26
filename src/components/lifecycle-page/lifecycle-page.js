import React from "react";
import MyButton from "../button";
import getColor from "../../utils";

// export default class LifecyclePage extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             events: props.events,
//         }
//     }
//
//     clearEvents = () => {
//         this.props.onClearEvents();
//     }
//
//     render() {
//         const {events} = this.state;
//
//         const eventsList = events.map((element, idx) => {
//             return (
//                 <li key={element}
//                     className="collection-item">
//                     {`${idx}. ${element}`}
//                 </li>);
//         })
//
//         return (
//             <div>
//                 <div className="row center">
//                     <div className="col s4 offset-s4">
//                         <ul className="collection">
//                             {eventsList}
//                         </ul>
//                     </div>
//                 </div>
//
//                 <div className="row center">
//                     <MyButton title="Clear"
//                               icon={undefined}
//                               onSubmit={this.clearEvents}/>
//                 </div>
//             </div>
//         );
//     }
// }

const LifecyclePage = ({events, onClearEvents}) => {

    const clearEvents = () => {
        onClearEvents();
    }

    const eventsList = events.map(element => {
        const elementBackground = getColor(element.name);

        return (
            <li key={element.number}
                className={`collection-item ${elementBackground}`}>
                {`${element.number}. ${element.name}   `}
                <b>{`${element.timestamp}`}</b>
            </li>);
    })

    return (
        <div>
            <div className="row center">
                <MyButton title="Clear lifecycle list"
                          icon={undefined}
                          onSubmit={clearEvents}/>
            </div>
            <div className="row center">
                <div className="col s4 offset-s4">
                    <ul className="collection">
                        {eventsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LifecyclePage;