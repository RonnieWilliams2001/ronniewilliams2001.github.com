const fs = require('fs')

function readJSON(filename = '') {
  return JSON.parse(

    fs.existsSync(filename)
    ? fs.readFileSync(filename).toString()
    : '""'
  )
}


function writeJSON(filename = '', json = '""') {
  return fs.writeFileSync(

    filename,
    JSON.stringify(json, null, 2)
  )
}
