const dateFormat = (dateInput, format) => {
  var day = dateInput.getDate();
  var month = dateInput.getMonth() + 1;
  var year = dateInput.getFullYear();
  format = format.replace(/yyyy/, year);
  format = format.replace(/mm/, month);
  format = format.replace(/dd/, day);
  return format;
};

const date = new Date();
console.log(dateFormat(date, "yyyy-mm-dd"));
