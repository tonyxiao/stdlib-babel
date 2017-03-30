// @flow

import { doSomething, run } from '../../utils'

type Params = {
  args: [string, string]
}

export default run(async (params: Params) => {
  console.log('> starting....');
  
  console.log(params.args)
  
  await doSomething()
  
  console.log('finishing...')
  return 'hello world'
})