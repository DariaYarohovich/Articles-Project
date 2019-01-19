import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";

class DatepickerComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });

        if (date > this.state.endDate) {
            this.handleChangeEnd(date);
        }
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });

        if (date < this.state.startDate) {
            this.handleChangeStart(date);
        }
    }

    render() {
        return (
            <div className="datepicker">
                <DatePicker
                    className="datepicker__item"
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />

                <DatePicker
                    className="datepicker__item"
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
            </div>
        )
    }
}

export default DatepickerComp;