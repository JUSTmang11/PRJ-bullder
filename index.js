import express from 'express'
const app = express()

const port = 8080

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.redirect('home')
    // res.render('home')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('cotact')
})

app.listen(port,()=>{
    console.log('loacalhost:8080')
})
