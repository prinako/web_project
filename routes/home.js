const express = require ('express');
const router = express.Router();
const {News} = require('../databases/schema');


router.get('/', async(req, res) =>{
    const articles = await News.find();
    res.render('index', {title:'Home', articles});
})

router.get('/about', (req, res) =>{
    res.render('about', {title:'About'});
})

router.get('/videos', (req, res) =>{
    res.render('videos', {title:'Vidoes'});
})

router.get('/news', async(req, res) =>{
    const articles = await News.find();
    res.render('news', {title:'News', articles});
})

router.get('/secrityUpdate', (req, res) =>{
    res.render('secrityUpdate', {title:'SecrityUpdate'});
})

router.get('/onepuls', (req, res) =>{
    res.render('onepuls', {title:'Onepuls'});
})
module.exports = router;