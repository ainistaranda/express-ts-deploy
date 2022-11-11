import * as functions from "firebase-functions";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from "cors";
// import { getAllUsers } from "./users";


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to TypeScript");
});
// app.get("/users", getAllUsers)


export const api = functions.https.onRequest(app);
