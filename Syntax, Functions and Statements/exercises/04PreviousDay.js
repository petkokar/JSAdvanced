function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    const newYear = date.getFullYear();
    const newMonth = date.getMonth() + 1;
    const newDay = date.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
    
}

previousDay(2016, 9, 30);