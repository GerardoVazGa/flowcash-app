export function generateMarkedDates(selectedDate, endDate, theme) {
    const markedDates = {}
    
    const [startYear, startMonth, startDay] = selectedDate.split("-").map(Number)
    const [endYear, endMonth, endDay] = endDate.split("-").map(Number)

    const currentDate = new Date(startYear, startMonth - 1, startDay)
    const endDateObj = new Date(endYear, endMonth - 1, endDay)

    while (currentDate <= endDateObj) {
        const auxDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`

        const isStart = auxDate === selectedDate
        const isEnd = auxDate === endDate

        markedDates[auxDate] = {
            startingDay: isStart,
            endingDay: isEnd,
            color: isStart || isEnd 
                ? theme.colors.primary 
                : theme.colors.primaryContainer,
            textColor: isStart || isEnd 
                ? theme.colors.onPrimary 
                : theme.colors.text,
            disableTouchEvent: !isStart
        }

        currentDate.setDate(currentDate.getDate() + 1)
    }

    return markedDates
}