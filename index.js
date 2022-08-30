const express = require("express");
const app = express();
const firebase = require("firebase");
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
require("firebase/app");
require("firebase/database");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CORS 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
// var cors = require("cors");
// app.use(cors({ origin: "*" }));

const firebaseConfig = {
  apiKey: "AIzaSyBv4u6AM_0sP3q0GGYVXaGZa4bNFkg-6Lc",
  authDomain: "e-commerce-5195a.firebaseapp.com",
  databaseURL: "https://e-commerce-5195a-default-rtdb.firebaseio.com",
  projectId: "e-commerce-5195a",
  storageBucket: "e-commerce-5195a.appspot.com",
  messagingSenderId: "1019247495603",
  appId: "1:1019247495603:web:af69f1cb4ac1fb422fa3c6",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

app.get("/getData", (req, res) => {
  database.ref("data/Men/Shoes").on("value", (snap) => {
    res.send(snap.val())
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
