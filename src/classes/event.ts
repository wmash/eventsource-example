import { v1 as uuidV1 } from "uuid";

export class Event {
	private id: string;
	private streamId: string;
	private data: object;
	private metadata: object;
	private type: string;
	private created: Date;
	private number;

	public getStreamId(): string {
		return this.streamId;
	}

	constructor(streamId: string, eventType: string) {
		this.id = uuidV1();
		this.streamId = streamId;
		this.type = eventType;
		this.data = {};
		this.metadata = {};
		this.created = new Date();
		this.number = 0;
	}
}
