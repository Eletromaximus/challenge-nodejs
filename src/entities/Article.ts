export class Article {
  protected id!: string
  private title!: string
  private featured!: boolean
  private imageUrl!: string
  private url!: string
  private newsSite!: string
  private summary!: string
  private publishedAt!: string
  private launches!: {
    id: string,
    provider: string
  }[] | []

  private events!: {
    id: string,
    provider: string
  }[] | []

  constructor (props: Article) {
    Object.assign(this, props)
    Object.freeze(this)
  }

  public static create (props: Article) {
    if (!Article.validateArticle(props)) {
      throw new Error('Erro de validação')
    }

    return new Article(props)
  }

  static validateArticle (props: Article) {
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
