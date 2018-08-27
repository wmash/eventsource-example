import { NextFunction, Request, Response, Router } from "express";
import { readJson, writeJson } from "fs-extra";
import { extend } from "lodash";

import { BaseRoute } from "./route";
import { Stream } from "./../classes/stream";
import { Storage } from "./../classes/storage";

/**
 * / route
 *
 * @class StreamRoute
 */
export class StreamRoute extends BaseRoute {
	/**
	 * Constructor
	 *
	 * @class StreamRoute
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Create the routes.
	 *
	 * @class StreamRoute
	 * @method create
	 * @static
	 */
	public static create(router: Router) {
		console.log("[StreamRoute::create] Creating stream route.");

		router.post("/api/stream/new", (req: Request, res: Response, next: NextFunction) => {
			StreamRoute.createNewStream(req, res, next);
		});

		router.post("/api/stream/:id/delete", (req: Request, res: Response, next: NextFunction) => {
			StreamRoute.deleteStream(req, res, next);
		});
	}

	/**
	 * The home page route.
	 *
	 * @class StreamRoute
	 * @method createNewStream
	 * @param req {Request} The express Request object.
	 * @param res {Response} The express Response object.
	 * @param next {NextFunction} Execute the next method.
	 */
	public static async createNewStream(req: Request, res: Response, next: NextFunction) {
		const { body } = req;
		const newStream: Stream = new Stream(body.streamName);

		await Storage.addStream(newStream);

		res.redirect(`http://${process.env.HOST}:${process.env.PORT}`);
	}

	public static async deleteStream(req: Request, res: Response, next: NextFunction) {
		const { params } = req;

		await Storage.deleteStream(params.id);

		res.status(200).send({
			redirect: true,
			url: "/"
		});
	}
}
