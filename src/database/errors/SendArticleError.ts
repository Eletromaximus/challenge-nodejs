import { UseCaseError } from './UseCaseError'

export class SendArticleError extends Error implements UseCaseError {
  constructor () {
    super('Article Service error.')
    this.name = 'ArticleService'
  }
}
