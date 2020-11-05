import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Person, PersonSchema } from './person.model';
import { PersonService } from './person.service';
import { PersonResolver } from './person.resolver';
import { PaystackModule } from 'nestjs-paystack/lib/PaystackModule';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    PaystackModule.forRoot({
      apiKey: 'sk_test_8e1f650538d81faf9391ff6ee7de8252e89fc01e',
    }),
  ],
  providers: [PersonService, PersonResolver],
})
export class PersonModule {}
