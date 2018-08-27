import { v1 as uuidV1 } from "uuid";

export class Stream {
	private id: string;
	private name: string;
	private events: Object = [];

	constructor(streamName: string) {
		this.id = uuidV1();
		this.name = streamName;
		this.events = [];
	}

	public getEvents(): Object {
		return this.events;
	}
}
