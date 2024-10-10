//u23524121

const {fileRead, fileWrite} = require("./fileManager");
const {checkDate, checkName} = require("./dataValidation");

const read = fileRead();

const filterData = read.filter(input => checkDate(input.date));

const events =  filterData.map(event => {
    event.validName = checkName(event.name);

    return event;
});

fileWrite(events);