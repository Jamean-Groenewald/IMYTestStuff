"use strict";

//u23524121 Jamean Groenewald

var express = require("express");
//import express from "express";

//CREATE APP
var app = express();
//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(express["static"]("public"));
//PORT TO LISTEN TO
app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});