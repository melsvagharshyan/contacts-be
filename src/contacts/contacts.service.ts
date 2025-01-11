import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema'; // This is the interface (type)

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact') private contactModel: Model<Contact>, // Use 'Contact' (the string name)
  ) {}

  // Create a contact
  async create(createContactDto: {
    firstName: string;
    lastName: string;
    contactDescription: string;
    avatar: string;
  }): Promise<Contact> {
    const createdContact = new this.contactModel(createContactDto);
    return createdContact.save();
  }

  // Get all contacts
  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }

  // Get contact by ID
  async findOne(id: string): Promise<Contact> {
    return this.contactModel.findById(id).exec();
  }

  // Update contact
  async update(
    id: string,
    updateContactDto: {
      firstName?: string;
      lastName?: string;
      contactDescription?: string;
      avatar?: string;
    },
  ): Promise<Contact> {
    return this.contactModel
      .findByIdAndUpdate(id, updateContactDto, { new: true })
      .exec();
  }

  // Delete contact
  async remove(id: string): Promise<Contact> {
    return this.contactModel.findByIdAndDelete(id).exec();
  }
}
