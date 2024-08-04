import express from 'express'
// import path from 'path'
import profile from './route/profile.js'
const app = express()

const port = 8080

app.set('view engine', 'ejs')

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
app.use(express.static('src'))
app.use(express.json())
app.use(express.urlencoded({ extended :true }))

app.use('/profile',profile)

app.get('/',(req,res)=>{
    res.redirect('home')
    // res.render('home')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.listen(port,()=>{
    console.log('loacalhost: '+ port)
})
