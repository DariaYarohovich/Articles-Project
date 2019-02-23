import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import {
    changeStartDate,
    changeEndDate
} from "../../actionCreators";

import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.css";

class DatepickerComp extends Component {
    constructor(props) {
        super(props);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    render() {
        const {
            startDate,
            endDate
        } = this.props;

        return (
            <div className="datepicker">
                <h3 className="datepicker__title">Dates</h3>
                <DatePicker
                    className="datepicker__item"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeStart}
                />

                <DatePicker
                    className="datepicker__item"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeEnd}
                />
            </div>
        )
    }

    handleChangeStart(date) {
        const {
            endDate,
            dispatchChangeEndDate,
            dispatchChangeStartDate
        } = this.props;

        dispatchChangeStartDate(date);

        if (date > endDate && endDate) {
            dispatchChangeEndDate(date);
        }
    }

    handleChangeEnd(date) {
        const {
            startDate,
            dispatchChangeEndDate,
            dispatchChangeStartDate
        } = this.props;

        dispatchChangeEndDate(date);

        if (date < startDate && startDate) {
            dispatchChangeStartDate(date);
        }
    }
}

export default connect(
    store => ({
        startDate: store.filters.startDate,
        endDate: store.filters.endDate
    }),
    dispatch => ({
        dispatchChangeStartDate: (newDate) => dispatch(changeStartDate(newDate)),
        dispatchChangeEndDate: (newDate) => dispatch(changeEndDate(newDate))
    })
)(DatepickerComp);