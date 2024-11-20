// 为原始的axios添加基本的配置default，拦截器interceptors
function yzyAxios(config) {
  this.default = config;
  this.interceptors = {
    request: new interceptorsManager(),
    response: new interceptorsManager(),
  };
}

yzyAxios.prototype.request = function (config) {
  // 创建一个成功的promise
  let promise = Promise.resolve(config);
  // undefined用于占位，保持两个一组
  let chains = [dispatchRequest(config), undefined];

  // 将request里面的handlers数组中存储的请求拦截器的回调从chains数组的前面压入chains数组
  this.interceptors.request.handlers.forEach((item) => {
    chains.unshift(item.fulfilled, item.rejected);
  });
  // 同request一样
  this.interceptors.response.handlers.forEach((item) => {
    chains.push(item.fulfilled, item.rejected);
  });
  while (chains.length) {
    promise = promise.then(chains.shift, chains.shift);
  }
};

// get方法
yzyAxios.prototype.get = function (config) {
  return this.request({
    ...config,
    method: "GET",
  });
};

// post方法
yzyAxios.prototype.post = function (config) {
  return this.request({
    ...config,
    method: "POST",
  });
};

function createInstance(config) {
  // 创建一个新的 yzyAxios 实例，传入配置对象 config
  let context = new yzyAxios(config);

  // 创建一个请求方法，并绑定到刚才创建的 context 实例上
  let instance = yzyAxios.prototype.request.bind(context);

  // 将 yzyAxios 原型上的方法绑定到 instance 上
  Object.keys(yzyAxios.prototype).forEach((key) => {
    instance[key] = yzyAxios.prototype[key].bind(context);
  });

  // 将 context 上的所有实例属性复制到 instance 上
  Object.keys(context).forEach((key) => {
    instance[key] = context[key];
  });

  // 返回绑定了所有属性和方法的实例
  return instance;
}

function dispatchRequest(config) {
  return xhrAdaptor(config).then(
    (response) => {
      console.log(response);
    },
    (err) => {
      console.log(err);
    }
  );
}

function xhrAdaptor(config) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 300) {
          resolve({
            config: config,
            data: xhr.response,
            request: xhr,
            headers: xhr.getAllResponseHeaders(),
            status: xhr.status,
            statusText: xhr.statusText,
          });
        } else {
          reject(new Error("请求失败, 状态码: " + xhr.status));
        }
      }
    };
    if (config.cancelToken) {
      config.cancelToken.promise.then(() => {
        xhr.abort();
      });
    }
  });
}

function interceptorsManager() {
  this.handlers = [];
}

interceptorsManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({ fulfilled, rejected });
};

function cancelToken(executor) {
  let resolvePromise;
  this.promise = new Promise((resolve) => {
    resolvePromise = resolve;
  });

  executor(function () {
    resolvePromise();
  });
}
