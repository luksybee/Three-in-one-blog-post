import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => [String])
  hobbies: Types.ObjectId[];
}