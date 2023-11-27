import { request } from '@/lib/axios'
import {
  type TestReqSchema,
  testReqSchema,
  testResSchema
} from './validationSchemas'

export const sendMockedTest = (req: TestReqSchema) =>
  request(
    {
      reqSchema: testReqSchema,
      resSchema: testResSchema
    },
    {
      method: 'post',
      url: '/test',
      req
    },
    {
      mockData: {
        message: 'Mocked message'
      },
      errorMessage: 'Mocked error message'
    }
  )
