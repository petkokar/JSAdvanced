function date(month, year) {
    const lastDayOfMonth = new Date(year, month, 0);
    console.log(lastDayOfMonth.getDate());
}

date(4, 2012)