const express = require('express');
const morgan = require('morgan');
const app= express();

app.use(morgan('dev'));

app.use(require('./routes/index'));



module.exports = app;

git config --global user.email "1210@holbertonschool.com"
git config --global user.name "cmlesquivel"

git remote add origin https://github.com/cmlesquivel/hbtn.git