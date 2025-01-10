import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ContactsModule,
    MongooseModule.forRoot(
      'mongodb+srv://melsvagharshyan18:mels7878@cluster0.jedxf.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
