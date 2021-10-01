const ExpenseDateTime = (props) => {

    const day = props.dateTime.toLocaleString('en-Us', { day: '2-digit' });
    const month = props.dateTime.toLocaleString('en-Us', { month: 'long' });
    const year = props.dateTime.toLocaleString();

    return(
        <div>
            <div> {day}</div>
            <div> {month}</div>
            <div> {year}</div>
        </div>
    )
}

export default ExpenseDateTime ;