import { readFile, writeFile } from 'fs/promises';

export class MessagesResository {
  async getMessages() {
    const contents = await readFile('messages.json', 'utf-8');
    return JSON.parse(contents);
  }

  async findOne(id: string) {
    return await this.getMessages()[id];
  }

  async findAll() {
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
