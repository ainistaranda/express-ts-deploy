import * as functions from "firebase-functions";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from "cors";
import {getAllPosts} from "./posts";
import {createNewPost} from "./posts";


const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", (req: Request, res: Response): void => {
//   res.send("Welcome to TypeScript");
// });
app.get("/users", getAllPosts)
app.post("/createNewUser", createNewPost)


export const api = functions.https.onRequest(app);
