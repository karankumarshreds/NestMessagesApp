import { readFile, writeFile } from 'fs/promises';

export class MessagesResository {
  async getMessages() {
    const contents = await readFile('message.json', 'utf-8');
    return JSON.parse(contents);
  }

  async findOne(id: string) {
    const messages = await this.getMessages();
    return messages[id];
  }

  async findAll() {
    return await this.getMessages();
  }

  async create(content: string): Promise<{ id: number; content: string }> {
    const messages = await this.getMessages();
    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content,
    };
    await writeFile('message.json', JSON.stringify(messages));
    return {
      id,
      content,
    };
  }
}
