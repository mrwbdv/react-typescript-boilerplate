import React, { Component } from "react";
import ReactDOM from "react-dom";

import { App } from "./app";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

// const path = require("path");
// const str: string = "hellllo";

// console.log(str);

// console.log("Dir name", __dirname); //Где находится файл который был запущен

// console.log("File name", __filename);

// console.log("Process", process.cwd()); //Откуда был запушен скрипт

// console.log("Path resolve cwd", path.resolve(process.cwd())); //Полный путь к папке где находится скрипт

// console.log("Path resolve __dirname", path.resolve(__dirname));
