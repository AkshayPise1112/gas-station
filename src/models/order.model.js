import mongoose, { model, Schema } from 'mongoose';

const orderSchema = new Schema(
	{
		productType: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
			default: 0,
		},
		driver: {
			type: Schema.Types.ObjectId,
			ref: 'Driver',
		},
		deliverTo: {
			type: Schema.Types.ObjectId,
			ref: 'Owner',
		},
		deliveryDate: {
			type: Date,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			required: true,
			default: false,
		},
		isPaymentDone: {
			type: Boolean,
			default: false,
			required: true,
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0,
		},
		pricePerLitre: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true }
);
export const Order = model('Order', orderSchema);
