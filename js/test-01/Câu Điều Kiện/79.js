let year = 2022;
let month = 2;

let getDaysInMonth = (year, month) => {
    let result = "";
    

    if (month == 1 || month == 3 || month == 5 || month == 7 || 
        month == 8 || month == 10 || month == 12) {
        result = `Tháng ${month} năm ${year} có 31 ngày.`;
    }
    
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        result = `Tháng ${month} năm ${year} có 30 ngày.`;
    }
    else if (month == 2) {
        
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            result = `Tháng 2 năm ${year} có 29 ngày.`;
        } else {
            result = `Tháng 2 năm ${year} có 28 ngày.`;
        }
    }
    
    return result;
    

}

console.log(getDaysInMonth(year, month));
