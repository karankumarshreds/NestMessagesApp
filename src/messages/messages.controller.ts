import { Controller, Get, Post, NotFoundException } from '@nestjs/common';
/// argument decorators
import { Body, Param } from '@nestjs/common';
// dto
import { CreateMessageDto } from './dtos/create.messages.dto';
// service
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    const message = this.messagesService.create(body.content);
    return message;
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const messageId = id;
    const message = await this.messagesService.findOne(messageId);
    if (!message) {
      throw new NotFoundException('Message with ID not found');
    }
    return message;
  }
}
