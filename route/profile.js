import express from 'express'
import db from '../libs/config.js'
// import condb from '../libs/conndb.js'
const router = express.Router()

async function Getdata(dataname){
    const data_row = await db.collection(dataname).get().then((snapshot)=>{
        return snapshot.docs.map(doc=> doc.data())
    })
    return data_row
}

// async function Getdata(dataname){
//     const data_row = await condb.collection(dataname).get().then((snapshot)=>{
//         return snapshot.docs.map(doc=> doc.data())
//     })
//     return data_row
// }

router.get('/',(req,res)=>{
    res.render('profile')
})
router.get('/test',async (req,res)=>{
    try{
        const user = await Getdata('user')
        if(user){
            res.render('test.ejs',{
                user:user,
                status:true
            })
            console.log(user)
        }
    }catch(e){
        console.log("Error: "+e)
    }  
})

export default router