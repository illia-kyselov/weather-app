import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherModule } from './schemas/weather.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://weather-user:asdfgh-qwerty@weather.ssg94.mongodb.net/weather?retryWrites=true&w=majority',
    ),
    WeatherModule,
  ],
})
export class AppModule {}
