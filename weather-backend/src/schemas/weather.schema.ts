import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Weather extends Document {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  weather: string;

  @Prop({ required: true })
  icon: string;
}

export const WeatherSchema = SchemaFactory.createForClass(Weather);
