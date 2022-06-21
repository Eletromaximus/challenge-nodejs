import { randomUUID as v4 } from 'node:crypto'

export class Articles {
  private readonly id!: string
  private title!: string
  private feature!: boolean
  private imageUrl!: string
  private newsSite!: string
  private summary!: string
  private publishedAt!: string
  private launches!: [
    {
      id: string,
      provider: string
    }
  ]

  constructor (props: Omit<Articles, 'id'>, id: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}
