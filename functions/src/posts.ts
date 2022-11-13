import { dbConnect } from "./dbConnect";
import { Request, Response } from "express";


export function getAllPosts(req: Request, res: Response) : void {
  const db = dbConnect();
  db.collection("users")
    .get()
    .then((collection: FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData>) => {
      console.log(collection.size)
      const usersArr = collection.docs.map((doc: FirebaseFirestore.QueryDocumentSnapshot<FirebaseFirestore.DocumentData>) => {
        console.log(doc.updateTime)
        return { ...doc.data(), postId: doc.id };
      });
      res.status(200).send(usersArr);
    })
    .catch((err) => res.status(500).send({ success: false, message: err }));
}

export function createNewPost(req: Request, res: Response) {
  const db = dbConnect();
  db.collection("posts")
    .add(req.body)
    // .then(() => getAllUsers(req,res))
    .then(newPost => res.status(201).send({ success: true, message: 'Post created: ' + newPost.id }))
    .catch((err) => res.status(500).send({ success: false, message: err }));
}