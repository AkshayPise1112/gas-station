import mongoose, { model, Schema } from 'mongoose';

const stockSchema = new Schema(
	{
		productType: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
		fullCapacity: {
			type: Number,
			required: true,
			default: 0,
		},
		presentQuantity: {
			type: Number,
			required: true,
			default: 0,
		},
		orderedQuantity: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timeStamps: true }
);

export const Stock = model('Stock', stockSchema);
