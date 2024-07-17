import mongoose, { model, Schema } from 'mongoose';
const driverSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		name: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		contact: {
			type: Number,
			required: true,
		},
		vehicleNumber: {
			type: Number,
			required: true,
		},
		capacity: {
			type: Number,
			required: true,
		},
		completedOrders: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
		pendingOrder: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
	},
	{ timestamps: true }
);
export const Driver = model('Driver', driverSchema);
