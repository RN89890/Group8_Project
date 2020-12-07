const express = require('express')
const Prison = require('./../models/prison')
const router = express.Router()
const mongoose = require('mongoose')






router.get('/yo', (req, res) =>{
    res.render('prisons/yo')
})

router.get('/new', (req, res) =>{
    res.render('prisons/new', {prison: new Prison() })
})

router.get('/:id', async (req, res) =>{
    const prison = await Prison.findById(req.params.id)
    if(prison == null) res.redirect('/')
    res.render('prisons/show', {prison: prison})
})




router.post('/yoPost', async (req, res) => {

    x = req.body.name
    let prisons = await Prison.findOne({ name: x }).exec()
    if(prisons == null){
        res.redirect("/")

    }
    //res.redirect(`/prisons/${prison.id}`)

    res.render('prisons/view', { prisons: prisons})
  
})



router.post('/', async (req, res) => {
    let prison = new Prison({
        name: req.body.name,
        state: req.body.state,
        popTested: req.body.popTested,
        popTestedPostitive: req.body.popTestedPostitive,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        deaths: req.body.deaths,

    })
    try{

        prison = await prison.save()
        res.redirect(`/prisons/${prison.id}`)
    }catch (e){
        res.render('prisons/new', {prison: prison })
    }
})

module.exports = router