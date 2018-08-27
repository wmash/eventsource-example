import { v1 as uuidV1 } from "uuid";

import { Event } from "./event";

export class Stream {
	private id: string;
	private name: string;
	private events: Event[] = [];

	constructor(streamName: string) {
		this.id = uuidV1();
		this.name = streamName;
		this.events = [];
	}

	public getEvents(): Event[] {
		return this.events;
	}
}
