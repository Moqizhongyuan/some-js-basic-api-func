class EventBus {
  listeners: any;
  constructor() {
    this.listeners = {};
  }

  // 添加订阅者
  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  // 发布事件
  emit(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => listener(data));
    }
  }

  // 移除订阅者
  off(event, listener) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter((l) => l !== listener);
  }
}
