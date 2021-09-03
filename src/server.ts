import express, { Response, Request } from "express";

import axios from "axios";

const app = express();

app.use(express.json());

app.get("/medias/:mediaId", async (req: Request, res: Response) => {
	const { mediaId } = req.params;

	await axios
		.get(process.env.API_SAMBATECH_HOST + `/medias/${mediaId}`, {
			params: {
				access_token: process.env.ACESS_TOKEN,
				pid: process.env.PID_CODE,
			},
		})
		.then(({ data }) => {
			return res.json(data).status(200);
		})
		.catch((err) => {
			return res.status(400).json({ message: err.message });
		});
});

app.listen(process.env.PORT | 3333, () => {
	console.log(`API is running`);
});
