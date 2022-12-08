import { IncomingMessage } from 'http';
import Container, { Service } from 'typedi';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Context {}

@Service<ContextService>()
export class ContextService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get(_req: IncomingMessage): Promise<Context> {
    return {};
  }

  public static instance() {
    return Container.get(ContextService);
  }
}

export default ContextService;
