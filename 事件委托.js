document.querySelector("ul").onclick = (event) => {
  event.target.innerHtml += ".";
};

// 这里是在事件冒泡的阶段触发的事件
