import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
// import serviceAccount from '../configer.json' with {type:'json'}
const serviceAccount = JSON.parse(fs.readFileSync('../configer.json', 'utf8'))

initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore()
// const user = db.collection('user')

export default db

