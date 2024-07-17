import mongoose, { model, Schema } from 'mongoose';

const productSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		currPrice: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{ timestamps: true }
);

export const Product = model('Product', productSchema);
