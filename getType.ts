function getType(val: any) {
  if (val === null) {
    return "null";
  } else if (typeof val === "object") {
    const type: string[] = Object.prototype.toString
      .call(val)
      .split(" ")[1]
      .split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    return typeof val;
  }
}
