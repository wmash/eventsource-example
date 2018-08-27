export class Event {
	private id: string;
	private streamId: string;
	private data: object;
	private metadata: object;
	private type: string;

	constructor(streamId: string, eventType: string) {
		this.id = Event.generateId();
		this.streamId = streamId;
		this.type = eventType;
		this.data = {};
		this.metadata = {};
	}

	private static generateId() {
		let generatedId = "";
		let first = false;
		let randomChars;

		for (let section = 0; section < 5; section++) {
			randomChars = Math.random().toString(36).substring(8);
			generatedId += ((first) ? randomChars : `-${randomChars}`);

			first = false;
		}
		return generatedId;
	}
}
