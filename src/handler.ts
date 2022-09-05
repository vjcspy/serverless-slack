import type { Handler } from 'serverless-http';
import serverlessHttp from 'serverless-http';

import { app } from './app';

const handlerWithServerless: Handler = serverlessHttp(app);

export const handler = async (event: any, context: any) => {
  const r = await handlerWithServerless(event, context);

  return r;
};
