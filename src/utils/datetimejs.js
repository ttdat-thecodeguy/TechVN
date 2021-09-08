export const formateDate = (timestamp) => {
  var date = new Date(timestamp);
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};

export const formatPublishDate = (timestamp) => {
  let date = formateDate(timestamp);
  let month = ""
  switch (date.month) {
    case 1:
      month = "Một";
      break
    case 2:
        month = "Hai";
        break
    case 3:
        month = "Ba";
        break
    case 4:
        month = "Bốn";
        break
    case 5:
        month = "Năm";
        break
    case 6:
        month = "Sáu";
        break
    case 7:
        month = "Bảy";
        break
    case 8:
        month = "Tám";
        break
    case 9:
        month = "Chín";
        break
    case 10:
        month = "Mười";
        break
    case 11:
        month = "Mười Một";
        break
    case 12:
        month = "Mười Hai";
        break
    default:
        month = "";
        break
  }
  return "Ngày " + date.day + " Tháng " + month + " " + date.year
};
