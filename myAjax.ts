const SERVER_URL = "/server";

const xhr = new XMLHttpRequest();

xhr.open("GET", SERVER_URL, true);

xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;

  if (this.status === 200) {
    console.log(this.response);
  } else {
    console.error(this.statusText);
  }
};

xhr.onerror = function () {
  console.error(this.statusText);
};

xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
xhr.send(null);
