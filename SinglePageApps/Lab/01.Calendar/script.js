document.addEventListener("DOMContentLoaded", () => {
    const monthCalendar = document.querySelectorAll('.monthCalendar');
    const yearsCalendar = document.querySelector('.yearsCalendar');

    yearsCalendar.addEventListener('click', yearsSection);
    monthCalendar.forEach(month => {
        month.querySelector('tbody').addEventListener('click', showMonthView);
        month.querySelector("caption").addEventListener('click', showYears);
    })

    document.querySelectorAll('.monthCalendar, .daysCalendar').forEach(element => {
        element.style.display = 'none';
    });

    function showYears(){
        yearsCalendar.style.display = 'block';
        document.querySelectorAll('.monthCalendar').forEach(element => {
            element.style.display = 'none';
        })
        document.querySelectorAll('.daysCalendar').forEach(element => {
            element.style.display = 'none';
        })
    }

    function yearsSection(event) {
        const target = event.target;
        if (target.classList.contains('date')) {
            const year = target.textContent.trim();
            showYearView(year);
        } else if (target.classList.contains('day')) {
            const year = target.querySelector('div').textContent.trim();
            showYearView(year);
        }
        
    }
    
    function showYearView(year) {
        yearsCalendar.style.display = 'none';
        document.getElementById(`year-${year}`).style.display = 'block';
    }

    function showMonthView(event) {
        const target = event.target;
        let year = '';
        let month = '';
        if(target.classList.contains('day')) {
            let table = target.parentElement.parentElement.parentElement;
            year = table.querySelector('caption').textContent.trim();
            month = target.querySelector("div").textContent.trim();
        } else if (target.classList.contains('date')) {
            month = target.textContent.trim();
            let table = target.parentElement.parentElement.parentElement.parentElement;
            year = table.querySelector('caption').textContent.trim();
        }
        showMonthDays(year, month);
    }

    function showMonthDays(year, month) {
        document.querySelectorAll('.monthCalendar').forEach(element => {
            element.style.display = 'none';
        })
        document.querySelectorAll('.daysCalendar').forEach(element => {
            element.style.display = 'none';
        })

        const daysTable = document.getElementById(`month-${year}-${monthToNum(month)}`)
        daysTable.style.display = 'block';
        daysTable.querySelector('caption').addEventListener("click", showYears)
    }


    function monthToNum(month) {
        switch(month) {
            case 'Jan': return '1';
            case 'Feb': return '2';
            case 'Mar': return '3';
            case 'Apr': return '4';
            case 'May': return '5';
            case 'Jun': return '6';
            case 'Jul': return '7';
            case 'Aug': return '8';
            case 'Sep': return '9';
            case 'Oct': return '10';
            case 'Nov': return '11';
            case 'Dec': return '12';
        }
    }
})