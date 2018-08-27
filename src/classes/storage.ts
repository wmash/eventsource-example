import * as path from "path";
import { readJson, writeJson } from "fs-extra";

import { Event } from "./event";
import { Stream } from "./stream";

/**
 * Performs CRUD operations on the flat files holding the events & streams
 *
 * @class Storage
 */
export class Storage {
	private static eventsStore: string = path.join(__dirname, "..", "..", "storage", "events.json");
	private static streamsStore: string = path.join(__dirname, "..", "..", "storage", "streams.json");

	/**
	 * Retrieves current events held in flat file
	 *
	 * @class Storage
	 * @method getEvents
	 * @static
	 */
	public static getEvents(): Event[] {
		try {
			return readJson(this.eventsStore);
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 * Retrieves current streams held in flat file
	 *
	 * @class Storage
	 * @method getStreams
	 * @static
	 */
	public static getStreams(): Stream[] {
		try {
			return readJson(this.streamsStore);
		} catch (err) {
			console.log(err);
		}
	}

	/**
	 * Deletes a single stream held in flat file
	 *
	 * @class Storage
	 * @method deleteStream
	 * @static
	 * @param stream {Stream} Stream to delete
	 */
	public static deleteStream(stream: Stream) {

	}

	/**
	 * Adds a single stream to the flat file
	 *
	 * @class Storage
	 * @method addStream
	 * @static
	 * @async
	 * @param stream {Stream} Stream to add
	 */
	public static async addStream(stream: Stream) {
		try {
			const currentStreams = await this.getStreams();

			currentStreams.push(stream);

			await this.setStreams(currentStreams);
		} catch(err) {
			console.error(err);
		}
	}

	/**
	 * Adds a single event to the flat file
	 *
	 * @class Storage
	 * @method addEvent
	 * @static
	 * @async
	 * @param event {Event} Event to add
	 */
	public static async addEvent(event: Event) {
		try {
			const currentEvents = await this.getEvents();

			currentEvents.push(event);

			await this.setEvents(currentEvents);
		} catch(err) {
			console.error(err);
		}
	}

	private static async setEvents(events: Event[]) {
		try {
			await writeJson(this.eventsStore, events);
		} catch(err) {
			console.error(err);
		}
	}

	private static async setStreams(streams: Stream[]) {
		try {
			await writeJson(this.streamsStore, streams);
		} catch(err) {
			console.error(err);
		}
	}
}
