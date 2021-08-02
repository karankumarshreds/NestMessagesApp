import { Controller, Get, Post } from '@nestjs/common';
/// argument decorators
import { Body, Param } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return 'Messages';
  }

  @Post()
  async createMessage(@Body() body: any) {
    console.log(body);
    return 'POST a message';
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    // const messageId = @Param('id');
    const messageId = id;
    return `Your message ID is ${messageId}`;
  }
}
