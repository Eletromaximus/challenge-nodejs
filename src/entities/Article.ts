import { ArticleData } from './ArticleData'

export class Article {
  public id!: number
  public title!: string
  public featured!: boolean
  public imageUrl!: string
  public url!: string
  public newsSite!: string
  public summary!: string
  public publishedAt!: string
  public launches!: {
    id: string,
    provider: string
  }[] | []

  public events!: {
    id: string,
    provider: string
  }[] | []

  constructor (props: Article) {
    Object.assign(this, props)
    Object.freeze(this)
  }

  public static create (props: ArticleData) {
    if (!Article.validateArticle(props)) {
      throw new Error('Erro de validação')
    }

    return new Article(props)
  }

  static validateArticle (props: ArticleData) {
    if (!props.id ||
      !props.featured ||
      !props.imageUrl ||
      !props.url ||
      !props.summary ||
      !props.title ||
      !props.newsSite ||
      !props.publishedAt
    ) {
      return false
    }

    if (props.events.length > 0 &&
      props.launches.length > 0
    ) {
      const eventIsValid = props.events.filter(valor => {
        return valor.id === '' || valor.provider === ''
      })

      const lauchesIsValid = props.launches.filter(valor => {
        return valor.id === '' || valor.provider === ''
      })

      if (eventIsValid !== [] && lauchesIsValid !== []) {
        return false
      }

      return true
    }
  }
}
