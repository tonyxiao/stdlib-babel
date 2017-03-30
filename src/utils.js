// @flow
import Analytics from 'analytics-node'

export const analytics = new Analytics('writekey')

export async function doSomething() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 50)
  })
}

export function run(fn: Function) {
  return async (params: Object, callback: Function) => {
    try {
      const res = await fn(params)
      analytics.flush(() => callback(null, res))
    } catch (e) {
      analytics.flush(() => callback(e))
    }
  }
}
