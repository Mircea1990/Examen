import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
	host: "localhost",
	username: "root",
	password: "password",
	database: "examen",
	port: "3307",
});

app.post("/user", (req, res) => {
	const name = req.body.name;
	const role = req.body.email;
	const contact = req.body.contact;

	const sqlInsert = "";
	db.query("INSERT INTO home (name, age, country) VALUES (?,?,?)", [name, role, contact], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send("Values Inserted");
		}
	});
});

export default router;
