import { NextFunction, Request, Response, Router } from "express";

import { BaseRoute } from "./route";
import { Storage } from "./../classes/storage";

/**
 * / route
 *
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {

	/**
	 * Constructor
	 *
	 * @class IndexRoute
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Create the routes.
	 *
	 * @class IndexRoute
	 * @method create
	 * @static
	 */
	public static create(router: Router) {
		console.log("[IndexRoute::create] Creating index route.");

		router.get("/", (req: Request, res: Response, next: NextFunction) => {
			new IndexRoute()
					.index(req, res, next);
		});
	}

	/**
	 * The home page route.
	 *
	 * @class IndexRoute
	 * @method index
	 * @param req {Request} The express Request object.
	 * @param res {Response} The express Response object.
	 * @param next {NextFunction} Execute the next method.
	 */
	public async index(req: Request, res: Response, next: NextFunction) {
		this.render(req, res, "index", {
			title: "Event Store",
			currentStreams: await Storage.getStreams(),
			currentEvents: await Storage.getEvents()
		});
	}
}
