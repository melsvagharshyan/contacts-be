import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller()
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // Create contact
  @Post('contact')
  create(
    @Body()
    createContactDto: {
      firstName: string;
      lastName: string;
      contactDescription: string;
    },
  ) {
    return this.contactsService.create(createContactDto);
  }

  // Get all contacts
  @Get('contacts')
  findAll() {
    return this.contactsService.findAll();
  }

  // Get a single contact by ID
  @Get('contact/:id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  // Update a contact
  @Put('contact/:id')
  update(
    @Param('id') id: string,
    @Body()
    updateContactDto: {
      firstName?: string;
      lastName?: string;
      contactDescription?: string;
    },
  ) {
    return this.contactsService.update(id, updateContactDto);
  }

  // Delete a contact
  @Delete('contact/:id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
