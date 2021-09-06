import { Router } from 'express';

import { http } from './../controllers/http';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const mediasRoutes = Router();

mediasRoutes.get('/medias/:mediaId', ensureAuthenticated, async (req, res) => {
	const { mediaId } = req.params;

	await http
		.get(`/medias/${mediaId}`, {
			params: {
				access_token: process.env.ACESS_TOKEN,
				pid: process.env.PID_CODE,
			},
		})
		.then(({ data }) => {
			return res.json(data.files).status(200);
		})
		.catch((err) => {
			return res.status(400).json({ message: err.message });
		});
});

export { mediasRoutes };
