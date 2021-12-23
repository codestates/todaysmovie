require("dotenv").config();
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const app = express();
const controllers = require("./controllers");

app.use(
  session({
    secret: "@todaysmovie",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
      path: "/",
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: "none",
      httpOnly: true,
      secure: false, //true 일때는 https 환경에서만 session 정보를 주고받도록처리
    },
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(cookieParser());
app.post("/signup", controllers.signup);
app.post("/login", controllers.login);
app.get("/myprofile", controllers.myprofile);
app.get("/logout", controllers.logout);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server = app.listen(HTTPS_PORT, () =>
  console.log(`port:${HTTPS_PORT}, http server runnning`)
);

module.exports = server;
