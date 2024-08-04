import express from 'express'
import db from '../libs/config.js'
const router = express.Router()

async function Getdata(dataname){
    const data_row = await db.collection(dataname).get().then((snapshot)=>{
        return snapshot.docs.map(doc=> doc.data())
    })
    return data_row
}

router.get('/',(req,res)=>{
    res.render('profile')
})
router.get('/test',async (req,res)=>{
    const user = await Getdata('user')
    if(user){
        res.render('test.ejs',{
            user:user,
            status:true
        })
        console.log(user)
    }else{
        res.render('test.ejs',{
            status:false
        })
    }
})

export default router