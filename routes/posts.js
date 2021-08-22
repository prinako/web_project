const express = require('express');
const router = express.Router();
const store = require('../multer/multer');
const fs = require('fs');
const {News} = require('../databases/schema');

router.use(express.static('public'));

router.route("/")
    .get((req, res) => {
        res.render('newspost', { title: 'Create Post' });
    })
    .post(store.single('content-image'), (req, res) => {
        const file = req.file;
        if(!file){
            return console.log("chose a file");
        }
        let img = fs.readFileSync(file.path);

        const image = img.toString('base64');

        const newPost = new News({
            title: req.body.title,
            content: req.body.content,
            photos:{
                imageType: file.mimetype,
                imageBase: image
            }
        });
        newPost.save(err=>{
            if(err){
                console.log(err);
            }else{
                console.log('sucesses')
            }
        })
        res.redirect('/');
    });

router.get('/:id', async (req, res)=>{
    const _id =req.params.id;
    const findArticle = await News.findById({_id:_id});
    res.render('post', {title:'News', article: findArticle});
} )
module.exports = router;