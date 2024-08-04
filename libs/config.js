import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'

const serviceAccount = JSON.parse(fs.readFileSync('../../NodeHostlearning/configer.json', 'utf8'))
initializeApp({
    credential: cert(serviceAccount)
})
const db = getFirestore()
// const user = db.collection('user')

export default db

