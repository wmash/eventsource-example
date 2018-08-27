import { NextFunction, Request, Response, Router } from "express";
import { readJson, writeJson } from "fs-extra";
import { extend } from "lodash";

import { BaseRoute } from "./route";
import { Event } from "./../classes/event";
import { Storage } from "./../classes/storage";

/**
 * / route
 *
 * @class EventRoute
 */
export class EventRoute extends BaseRoute {
	/**
	 * Constructor
	 *
	 * @class EventRoute
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Create the routes.
	 *
	 * @class EventRoute
	 * @method create
	 * @static
	 */
	public static create(router: Router) {
		console.log("[EventRoute::create] Creating event route.");

		router.post("/api/event/new", (req: Request, res: Response, next: NextFunction) => {
			EventRoute.createNewEvent(req, res, next);
		});
	}

	public static async createNewEvent(req: Request, res: Response, next: NextFunction) {
		const body = req.body;
		const newEvent: Event = new Event(body.streamId, body.eventType);

		await Storage.addEvent(newEvent);

		res.redirect(`http://${process.env.HOST}:${process.env.PORT}`);
	}
}
