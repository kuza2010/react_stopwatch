import React, {Component} from "react";

export default class MyButton extends Component {

    onSubmit = () => {
        const {onSubmit, title} = this.props;
        onSubmit(title);
    }

    render() {
        const {title, icon} = this.props;

        return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a className="waves-effect waves-light btn-small"
               onClick={this.onSubmit}>
                <i className="material-icons left">
                    {icon}
                </i>
                {title}
            </a>
        )
    }
}