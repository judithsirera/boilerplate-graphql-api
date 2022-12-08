import { PrismaClient } from '@prisma/client';
import Container, { Service } from 'typedi';

@Service<PrismaService>({ factory: () => new PrismaClient(), global: true, eager: true })
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }

  public static instance() {
    return Container.get(PrismaService);
  }
}

export default PrismaService;
