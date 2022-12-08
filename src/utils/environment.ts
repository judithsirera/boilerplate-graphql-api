export type Environment = 'dev' | 'stage' | 'prod';

export const getEnvironment = () => {
  return (process.env.ENVIRONMENT || 'dev') as Environment;
};

export const isProdEnvironment = () => {
  return getEnvironment() === 'prod';
};

export const isStageEnvironment = () => {
  return getEnvironment() === 'stage';
};

export const isDevEnvironment = () => {
  return getEnvironment() === 'dev';
};
