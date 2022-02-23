export const formateDate = (timestamp) => {
  var date = new Date(timestamp);
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};



export const formatPublishDate = (timestamp, isEn) => {
  let date = formateDate(timestamp);
  let month = ""


  switch (date.month) {
    case 0:
      month = !isEn ? "Một" : "January";
      break
    case 1:
        month = !isEn ? "Hai" : "February";
        break
    case 2:
        month = !isEn ? "Ba" : "March";
        break
    case 3:
        month = !isEn ? "Bốn" : "April";
        break
    case 4:
        month = !isEn ? "Năm" : "May";
        break
    case 5:
        month = !isEn ? "Sáu" : "June";
        break
    case 6:
        month = !isEn ? "Bảy" : "July";
        month = "Bảy";
        break
    case 7:
        month = !isEn ? "Tám" : "Argust";
        break
    case 8:
        month = !isEn ? "Chín" : "September";
        break
    case 9:
        month = !isEn ? "Mười" : "October";
        break
    case 10:
        month = !isEn ? "Mười Một" : "November";
        break
    case 11:
        month = !isEn ? "Mười Hai" : "December";
        break
    default:
        month = "";
        break
  }
  return !isEn ? "Ngày " + date.day + " Tháng " + month + " " + date.year : `${month}, ${date.day} ${date.year}`
};
