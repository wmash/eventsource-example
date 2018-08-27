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

		router.get("/api/stream/:id", (req: Request, res: Response, next: NextFunction) => {

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
		const body = req.body;
		const newStream: Stream = new Stream(body.streamName);

		await Storage.addStream(newStream);

		res.redirect(`http://${process.env.HOST}:${process.env.PORT}`);
	}
}
