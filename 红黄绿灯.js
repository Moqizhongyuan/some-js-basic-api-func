// callback实现

// const task = (light, timer, callback) => {
//   setTimeout(() => {
//     if (light === "red") {
//       console.log("red");
//     } else if (light === "yellow") {
//       console.log("yellow");
//     } else {
//       console.log("green");
//     }
//     callback();
//   }, timer);
// };

// const step = () => {
//   task("red", 2000, () => {
//     task("yellow", 2000, () => {
//       task("green", 2000, step);
//     });
//   });
// };

// step();

// promise实现

const task = (timer, light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
const step = () => {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(2100, "yellow"))
    .then(step);
};
step();

// async实现

const taskRunner = async () => {
  await task(3000, "red");
  await task(2000, "green");
  await task(2100, "yellow");
  taskRunner();
};
taskRunner();
