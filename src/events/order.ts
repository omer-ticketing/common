import { Subjects } from "./subjects";
import { OrderStatus } from "./types";

export interface OrderCreatedEvent {
	subject: Subjects.OrderCreated;
	data: {
		id: string;
		status: OrderStatus;
		userId: string;
		expiresAt: string;
		ticket: {
			id: string;
			price: number;
		};
		version: number;
	}
}
export interface OrderCancelledEvent {
	subject: Subjects.OrderCancelled;
	data: {
		id: string;
		ticketId: string;
		version: number;
	}
}