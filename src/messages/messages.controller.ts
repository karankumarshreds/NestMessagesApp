import { Controller, Get, Post } from '@nestjs/common';
/// argument decorators
import { Body, Param } from '@nestjs/common';
// dto
import { CreateMessageDto } from './dtos/create.messages.dto';
// service
import { MessagesService } from './messages.service';

interface Message {
  [id: string]: {
    content: string;
    id: number;
  };
}

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DO NOT DO THIS ON REAL APP
    // USE DEPENDENCY INJECTION INSTEAD
    this.messagesService = new MessagesService();
  }

  @Get()
  async listMessages(): Promise<Message> {
    return this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    const message = await this.messagesService.create(body.content);
    return message;
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string): Promise<Message> {
    const messageId = id;
    const message = await this.messagesService.findOne(messageId);
    return message;
  }
}
