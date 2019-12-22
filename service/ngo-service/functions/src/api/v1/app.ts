import * as express from 'express';
import * as firebase from 'firebase';
const app = express();

const db = firebase.database();

// Add new contact
app.post('/addUser', async (req, res) => {
    try {
        console.log("fire db1:");
        const email = req.body['email'];
        const contact = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: email
        }
        const users = {
            email: contact
        }
        console.log("fire db1.5:");
        const newDoc = db.ref('users/').set(users);
        console.log("fire db2:");
        res.status(201).send(`Created a new contact: ${newDoc}`);
    } catch (error) {
        res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
    }        
})
// Update new contact
// app.patch('/users/:userId', async (req, res) => {
//     const updatedDoc = await firebaseHelper.firestore
//         .updateDocument(db, contactsCollection, req.params.contactId, req.body);
    
//     res.status(204).send(`Update a new contact: ${updatedDoc}`);
// })
// View a contact
app.get('/users/:emailId', (req, res) => {
    const result = db.ref('users/' + req.params.emailId);
    result.on('value', (snapshot) => {
        if(snapshot) {
            res.status(200).send(snapshot.val());
        } else {
            res.status(400).send("User does not exits");
        }
    });
})
// View all contacts
app.get('/users', (req, res) => {
    const result = db.ref('users/');
    result.on('value', (snapshot:any) => {
        if(snapshot?.exists) {
            res.status(200).send(snapshot.val());
        } else {
            res.status(400).send("No Users exits");
        }
    });
})
// Delete a contact 
app.delete('/users/delete/:emailId', async (req, res) => {
    const dbReturn = db.ref('users/' + req.params.emailId);
    const promise = dbReturn.remove();
    promise.then(()=>{
        res.status(200).send(`User is deleted: ${req.params.emailId}`);
    }).catch(()=>{
        res.status(400).send(`Error occured while deleting`);
    });
})

export default app;