import ky from 'ky'

export const kyInstance = ky.create({
  prefixUrl: 'api',
  hooks: {
    beforeRequest: [(_request) => {}],
    afterResponse: [async (request, _options, response, state) => {}]
  }
})

export default kyInstance
