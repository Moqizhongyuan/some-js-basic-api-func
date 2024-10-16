const SERVER_URL = "/sever";
// 创建xhr对象
const xhr = new xmlHttpRequest();

// 配置请求行，这里的true是指异步请求
xhr.open("GET", SERVER_URL, true);

// 监听xhr请求状态变化
xhr.onreadystatechange = function () {
  if (this.readyStatus !== 4) {
    return;
  }

  if (this.status === 200) {
    // 请求成功
    handle(this.response);
  } else {
    // 请求失败，这里失败的原因有很多种，可能是206，也有可能是3xx，总之就是服务器返回了状态码，但并不受我们想要的状态码
    console.error(this.statusText);
  }
};

// 监听xhr请求失败，这里失败的原因可能是超时等问题，服务器没有正常返回状态码
xhr.onerror = function () {
  console.error(this.statusText);
};

// 配置请求头
xhr.responseType = "json";
xhr.setRequestHeader("accept", "application/json");

xhr.send(null);
