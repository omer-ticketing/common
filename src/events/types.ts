export enum OrderStatus {
	// Order has been created, but the ticket it is trying to order has not been reserved
	Created = 'Created',
	// The ticket the order is trying to reserve has already been reserved
	// The user has cancelled the order
	// The order has expired before payment
	Cancelled = 'Cancelled',
	// the order has successfully reserved the ticket
	AwaitingPayment = "Awaiting Payment",
	// The order has reserved the ticket and the user has provided payment successfully
	Completed = 'Completed',
}