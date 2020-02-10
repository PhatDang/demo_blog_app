import express from "express";
import morgan from "morgan";
import cors from "cors";
import { urlencoded, json } from "body-parser";
import { set, connect } from "mongoose";
import { database } from "./config/db";

const app = express();

const PORT = process.env.PORT || 4000;

//configure database and mongoose
set("useCreateIndex", true);
connect(database, {
	useNewUrlParser: true
})
	.then(() => {
		console.log("Database is connected");
	})
	.catch(err => {
		console.log({
			database_error: err
		});
	});
// db configuaration ends here

//registering cors
app.use(cors());

//configure body parser
app.use(
	urlencoded({
		extended: false
	})
);
app.use(json());

//configure body-parser ends here
app.use(morgan("dev")); // configire morgan

// define first route
app.get("/", (req, res) => {
	res.json("Hola Svelte Developers...Shall we fight??");
});
app.listen(PORT, () => {
	console.log(`App is running on ${PORT}`);
});
