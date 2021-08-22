const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cd )=>{
        cd(null, 'images')
    },
    filename: (req, file, cd )=>{
        const ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cd(null, file.fieldname+ '-' + Date.now() + ext)
        console.log(file, ext)
    }
})

module.exports = store = multer({storage});