import express from 'express';
import { mediasRoutes } from './routes/medias.routes';

const app = express();

app.use(mediasRoutes);
app.use(express.json());

app.listen(process.env.PORT || 3333, () => {
	console.log(`API is running`);
});
