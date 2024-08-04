import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
import path from 'path'
const __dirname = path.resolve();
// import serviceAccount from '../configer.json' with {type:'json'}
const serviceAccount = JSON.parse(fs.readFileSync( __dirname+"/configer.json",'utf8'))
// const serviceAccount = JSON.parse(fs.readFileSync("../../NodeHostlearning/configer.json",'utf-8'))

initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore()
export default db

