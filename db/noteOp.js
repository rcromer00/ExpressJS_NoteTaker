const fs = require("fs");
const  uuidv1 = require("uuidv1");

class noteOp {
    read(){
        return fs.readFileSync("db/db.json", "utf8");
    }
//fs.writeFile
    write() {
        return fs.writeFileSync("d")
    }
//addNote(argument will be note data - req.body in api routes file)
/*
for add first get all notes using getNote function and .then will be getting notes, add new note and write it back to db.json file
*/

//deleteNote(argument will be an id - req.paramas.id in api routes file)
    getNote(){
        return this.read().then((notes) => {
            let parsedNoteData = JSON.parse(notes); 

            return parsedNoteData;
        })
    }
}

module.exports = new noteOp();
