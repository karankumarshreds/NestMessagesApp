import { readFile, writeFile } from 'fs/promises';

interface Message {
  [id: string]: {
    content: string;
    id: number;
  };
}

export class MessagesResository {
  async getMessages(): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }

  async findOne(id: string): Promise<Message> {
    return await this.getMessages()[id];
  }

  async findAll(): Promise<Message> {
    return await this.getMessages();
  }

  async create(content: string) {
    const messages = await this.getMessages();
    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content,
    };
    await writeFile('message.json', JSON.stringify(messages));
  }
}
