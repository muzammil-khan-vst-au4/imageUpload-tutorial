var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');

app.use(cors())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${+new Date()}.jpg`);
    }
})

const upload = multer({
    storage
});

app.post('/upload', upload.single("photo"), async function(req, res) {
    try {
        //const path = req.file.path;  //get the file path
        /* 
            Some code to save in database
            or any operation
        */
       return res.status(200).send("File saved successfully")
      } catch (error) {
        res.status(400).send({ error });
      }
});


app.listen(9000, function() {
    console.log('running on port 9000');
});