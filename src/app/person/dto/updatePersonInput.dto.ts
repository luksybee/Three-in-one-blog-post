import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class UpdatePersonInput {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: Types.ObjectId[];
}