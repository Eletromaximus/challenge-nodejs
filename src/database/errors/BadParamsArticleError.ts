import { UseCaseError } from './UseCaseError'

export class BadParamsArticleError extends Error implements UseCaseError {
  constructor () {
    super('Bad request')
    this.name = 'Bad Request'
  }
}
