import { CHANGE_MONTH } from "../actions/calenderAction";
import { getDays } from "../utils/calenderUtil";
import { daysInMonth, monthDays, selectedMonth, selectedYear } from "../utils/dateUtil";





const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`)

const endDay = daysInMonth(selectedMonth, selectedYear)


const initialState = {
    startDay,
    endDay,
    selectedMonth,
    selectedYear,
    days: getDays(startDay, endDay)
}

export const reducers = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_MONTH:
            console.log('action', action)
            const { selectedMonth, selectedYear } = action.payload
            const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`)

            const endDay = daysInMonth(selectedMonth, selectedYear)
            const days = getDays(startDay, endDay)



            //logic to change the startDAY, ENDDAY AND DAYS
            return { ...state, selectedMonth, selectedYear, days }
        default:
            return state
    }
}



