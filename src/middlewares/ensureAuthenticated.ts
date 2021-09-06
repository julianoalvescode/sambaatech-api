import { NextFunction, Request, Response } from 'express';

export function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const authHeader = request.headers.authorization;

	if (!authHeader) {
		throw new Error('Token is missing');
	}

	const [, token] = authHeader.split(' ');

	if (token === process.env.ACESS_TOKEN) {
		next();
	} else {
		throw new Error('Invalid Token');
	}
}
