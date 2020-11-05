import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreatePersonInput } from './dto/createPersonInput.dto';
import { ListPersonInput } from './dto/listPersonInput.dto';
import { UpdatePersonInput } from './dto/updatePersonInput.dto';

import { Person, PersonDocument } from './person.model';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(payload: CreatePersonInput) {
    const createdPerson = new this.personModel(payload);
    return createdPerson.save();
  }

  getById(_id: Types.ObjectId) {
    return this.personModel.findById(_id).exec();
  }

  list(filters: ListPersonInput) {
    return this.personModel.find({ ...filters }).exec();
  }

  update(payload: UpdatePersonInput) {
    return this.personModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: Types.ObjectId) {
    return this.personModel.findByIdAndDelete(_id).exec();
  }
}
