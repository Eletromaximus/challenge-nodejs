import { ArticleData } from './ArticleData'
import { ValidateNameError } from './errors/ValidationNameError'

export class Article {
  public readonly id!: number
  public readonly title!: string
  public readonly featured!: boolean
  public readonly imageUrl!: string
  public readonly url!: string
  public readonly newsSite!: string
  public readonly summary!: string
  public readonly publishedAt!: string
  public readonly launches!:
    | {
        id: string
        provider: string
      }[]
    | []

  public readonly events!:
    | {
        id: string
        provider: string
      }[]
    | []

  constructor(props: Article) {
    Object.assign(this, props)
    Object.freeze(this)
  }

  static create(props: ArticleData): Article {
    if (!Article.validateArticle(props)) {
      throw new ValidateNameError()
    }

    return new Article(props)
  }

  static validateArticle(props: ArticleData): boolean {
    if (
      !props.id ||
      // !props.featured ||
      !props.imageUrl ||
      !props.url ||
      !props.summary ||
      !props.title ||
      !props.newsSite ||
      !props.publishedAt
    ) {
      return false
    }

    if (props.events.length > 0 && props.launches.length > 0) {
      const eventIsValid = props.events.filter((valor) => {
        return typeof valor.id !== 'string' || typeof valor.provider !== 'string'
      })

      const lauchesIsValid = props.launches.filter((valor) => {
        return typeof valor.id !== 'string' || typeof valor.provider !== 'string'
      })

      if (eventIsValid.length > 0 && lauchesIsValid.length > 0) {
        console.log(eventIsValid)
        console.log(lauchesIsValid)
        return false
      }

      return true
    }

    return true
  }
}
