import React from 'react'
import { connect, useSelector } from 'react-redux'
import { CHANGE_MONTH } from '../../actions/calenderAction'
import { MONTH_LIST } from '../../constants/calender'
import './Calendar.css'


function Calendar(props) {

    // const state = useSelector((state) => state)

    // console.log(state)

    console.log(props)


    const changeMonth = (arrow) => {

        let selectedYear;
        let selectedMonth

        if (arrow === 'LEFT') {

            if (props.selectedMonth === 0) {
                selectedMonth = 11
                selectedYear = props.selectedYear - 1
            } else {
                selectedMonth = props.selectedMonth - 1
                selectedYear = props.selectedYear
            }


        } else if (arrow === 'RIGHT') {

            if (props.selectedMonth === 11) {
                selectedMonth = 0
                selectedYear = props.selectedYear + 1
            } else {
                selectedMonth = props.selectedMonth + 1
                selectedYear = props.selectedYear
            }
        } else {
            selectedMonth = props.selectedMonth + 1
            selectedYear = props.selectedYear
        }

        props.dispatch({
            type: CHANGE_MONTH,
            payload: {
                selectedYear,
                selectedMonth
            }
        })


    }




    return (
        <div className='calender-container'>
            <div className='calender-inner-container'>
                <h2>Calender</h2>
                <div id='calender-display'>
                    <div className='month-header'>
                        <div className='left-arrow' onClick={() => changeMonth('LEFT')} >{'<'}</div>
                        <div id='month'>{MONTH_LIST[props.selectedMonth]},{props.selectedYear}</div>
                        <div className='right-arrow' onClick={() => changeMonth('RIGHT')} >{'>'}</div>

                    </div>
                    <div className='calender-container-child'>
                        <div>Sunday</div>
                        <div>Monday</div>
                        <div>Tuesday</div>
                        <div>Wednesday</div>
                        <div>Thursday</div>
                        <div>Friday</div>
                        <div>Saturday</div>


                    </div>
                    <div className='calender-container-child'>
                        {props.days.map((day, index) => {

                            return (
                                <div> {day} </div>

                            )
                        }
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}


const mapStatetoProps = (state) => {

    return {
        startDay: state.startDay,
        endDay: state.endDay,
        selectedMonth: state.selectedMonth,
        selectedYear: state.selectedYear,
        days: state.days
    }
}

export default connect(mapStatetoProps)(Calendar)

// export default Calendar