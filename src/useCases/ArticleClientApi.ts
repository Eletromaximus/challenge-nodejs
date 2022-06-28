import { Article } from '../entities/Article'
import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClient } from './ArticleClient'
import { ArticlesClientResponse, ArticleClientResponse } from './ArticleClientResponse'

export class ArticleClientApi implements ArticleClient {
  getArticles (articlesBD: ArticleBD[]): ArticlesClientResponse {
    const adapterArticles: Article[] = articlesBD.map(article => {
      const events = article.eventsId.map((eventId, index) => {
        return {
          id: eventId,
          provider: article.eventsProvider[index]
        }
      })

      const launches = article.launchesId.map((launcheId, index) => {
        return {
          id: launcheId,
          provider: article.launchesProvider[index]
        }
      })

      return Article.create({
        id: article.id,
        featured: article.featured,
        events,
        launches,
        imageUrl: article.imageUrl,
        newsSite: article.newsSite,
        publishedAt: article.publishedAt,
        summary: article.summary,
        title: article.title,
        url: article.url
      })
    })

    return adapterArticles
  }

  getArticle (id: number): Promise<ArticleClientResponse> {
    throw new Error('Method not implemented.')
  }

  postArticle (article: ArticleData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  changeArticle (id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }

  deleteArticle (id: number): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
