import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

interface Message {
  [id: string]: {
    content: string;
    id: number;
  };
}

// [Injectable]
/**
 * Since we are making use of Inversion Of Control principle, we do not want the
 * classes to have their own dependencies. Instead we want to provide dependency
 * as arguments to their constructors.
 * The constructor method takes in a dependency instance of some other class. This
 * can be either passed in manually, but to remove the redundancy of creating a new
 * instance of the dependency everytime we need to make use of a class, we make use
 * of Dependency Injection.
 * Dependency Injection Container (behind the scenes) makes a map of list of classes
 * and the dependencies. In this example, it would be MessagesService and MessagesRepo
 * Then, it also makes a list of instances of those dependencies (messagesRepo) in
 * order to make it reusable for wherever else that instance is needed.
 * IN SHORT, it makes the instances of the dependencies and passes them wherever they
 * are being used. This is done using @Injectable decorator which is NESTJS'S DI decorator.
 */

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor(messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
