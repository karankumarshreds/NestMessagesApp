import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
// injections
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  // list of providers that will be instantiated by the Nest injector and that may be shared at least across this module.
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
