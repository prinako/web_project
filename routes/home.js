const express = require ('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index', {title:'Home'});
})

router.get('/about', (req, res) =>{
    res.render('about', {title:'About'});
})

router.get('/videos', (req, res) =>{
    res.render('videos', {title:'Vidoes'});
})

router.get('/news', (req, res) =>{
    res.render('news', {title:'News'});
})

router.get('/secrityUpdate', (req, res) =>{
    res.render('secrityUpdate', {title:'SecrityUpdate'});
})

router.get('/onepuls', (req, res) =>{
    res.render('onepuls', {title:'Onepuls'});
})
module.exports = router;