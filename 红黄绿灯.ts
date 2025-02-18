function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

function task(timer: number, light: "red" | "yellow" | "green") {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else {
        yellow();
      }
      resolve(null);
    }, timer);
  });
}

function step() {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(1000, "yellow"))
    .then(step);
}
