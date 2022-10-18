import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { TableClient } from '@azure/data-tables';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const client = TableClient.fromConnectionString('connection', 'FooBarBaz');

  context.res = {
    body: {
      foo: client.tableName,
    },
  };
};

export default httpTrigger;
