import { Field, InputType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [String], { nullable: true })
  hobbies?: Types.ObjectId[];
}