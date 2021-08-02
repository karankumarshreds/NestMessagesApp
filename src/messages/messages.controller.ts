import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'Messages';
  }

  @Post()
  async createMessage() {
    return 'POST a message';
  }

  @Get('/:id')
  async getMessage() {
    return 'Single Message';
  }
}
