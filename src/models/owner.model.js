import mongoose, { model, Schema } from 'mongoose';

const ownerSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
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
		location: {
			type: 'Point',
			coordinates: [0, 0],
			required: true,
		},
		orders: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
		stock: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Stock',
			},
		],
	},
	{ timestamps: true }
);

export const Owner = model('Owner', ownerSchema);
