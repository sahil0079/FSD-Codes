export const selectedYear = new Date().getFullYear() //2022
export const selectedMonth = new Date().getMonth() //10


//return 31
export const daysInMonth = function (month, year) {
    return new Date(year, month + 1, 0).getDate()
}

//return day for your date
export const monthDays = function (date) {
    return new Date(date).getDay()
}
