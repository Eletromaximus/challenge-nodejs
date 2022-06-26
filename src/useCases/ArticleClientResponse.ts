import { ArticleData } from '../entities/ArticleData'
import { Either } from '../utils/either'
import { SendArticleError } from './errors/SendArticleError'

export type ArticleClientResponse = Either<SendArticleError, ArticleData>

export type ArticlesClientResponse = Either<SendArticleError, ArticleData[]>
