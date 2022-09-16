const validator = require('validator')
const getNotes = require('./notes.js')

const message = getNotes()

console.log(message)

console.log(validator.isURL('guidetophone.com'))







/* LESSON */
// const add = require('./utils.js')

// const sum = add(13, 14)

// console.log(sum)