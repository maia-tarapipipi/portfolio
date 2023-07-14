import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/profile').then((res) => {
    return res.body.fruits
  })
}
