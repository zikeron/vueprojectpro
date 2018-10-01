import trae from 'trae'
import configService from './config'

const musicService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicService
