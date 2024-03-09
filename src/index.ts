import Fastify from 'fastify';
import { SERVER_CONFIGS } from './configs/server';

const server = Fastify({ logger: true });

// server.register(publicRoutes);
// server.register(privateRoutes);
// server.addHook('preHandler', authMiddleware);

const startUp = async () => {
  try {
    await server.listen({ port: SERVER_CONFIGS.port });
    server.log.info(`Server listening on port ${SERVER_CONFIGS.port}`);
  } catch (err) {
    server.log.error(err);
  }
};

startUp();
