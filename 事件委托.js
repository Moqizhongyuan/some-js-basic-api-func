document.querySelector("ul").onclick = (event) => {
  event.target.innerHtml += ".";
};

// 这里是在事件冒泡的阶段触发的事件

// 获取节点内容
const element = document.getElementById("myElement");
const htmlContent = element.innerHTML; // 获取所有标签和文本
const textContent1 = element.innerText; // 获取所有文本
const textContent2 = element.textContent; // 获取所有文本 + 隐藏文本
const srcValue = element.getAttribute("src"); // 获取属性值

const inputElement = document.getElementById("myInput");
const userInput = inputElement.value; // 获取表单的input值
