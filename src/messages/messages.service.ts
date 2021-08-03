import { MessagesResository } from './messages.repository';

interface Message {
  [id: string]: {
    content: string;
    id: number;
  };
}

export class MessagesService {
  messagesRepo: MessagesResository;

  constructor() {
    // MessagesService is creating its own dependencies
    // DO NOT DO THIS ON REAL APPS !
    // USE DEPENDENCY INJECTION INSTEAD
    this.messagesRepo = new MessagesResository();
  }

  findOne(id: string): Promise<Message> {
    return this.messagesRepo.findOne(id);
  }

  findAll(): Promise<Message> {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
