import { Event } from "./event";

export class Stream {
	private id: string;
	private name: string;
	private events: Event[] = [];

	constructor(streamName: string) {
		this.id = Stream.generateId();
		this.name = streamName;
		this.events = [];
	}

	public getId(): string {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public getEvents(): Event[] {
		return this.events;
	}

	private static generateId() {
		let generatedId = "";
		let first = true;
		let randomChars;

		for (let section = 0; section < 5; section++) {
			randomChars = Math.random().toString(36).substring(8);
			generatedId += ((first) ? randomChars : `-${randomChars}`);

			first = false;
		}
		return generatedId;
	}
}
