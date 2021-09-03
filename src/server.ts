import express, { Response, Request } from "express";

import axios from "axios";

axios.create({
	baseURL: "http://api.sambavideos.sambatech.com/v1",
});

const app = express();

app.get("/medias/:mediaId", async (req: Request, res: Response) => {
	const { mediaId } = req.params;

	// const { data } = await axios
	// 	.get(`/medias/${mediaId}`, {
	// 		params: {
	// 			access_token: "d2c6ebae3cdc354c80121cf034de7a2b",
	// 			pid: "",
	// 		},
	// 	})
	// 	.then((r) => {
	// 		const status = r.status;

	// 		if (status === 200) {
	// 			return res.json(JSON.parse(data)).status(200);
	// 		}

	// 		return res.json({ message: "Error" }).status(400);
	// 	});
	return res.json({ message: "Hello World" });
});

app.listen(process.env.PORT | 3333, () => {
	console.log(`API is running }`);
});
