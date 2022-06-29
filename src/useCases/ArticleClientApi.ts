import { Article } from '../entities/Article'
import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClient } from './ArticleClient'
import { ArticlesClientResponse, ArticleClientResponse } from './ArticleClientResponse'

export class ArticleClientApi implements ArticleClient {
  articlesForBD (articles: ArticleData[]): ArticleBD[] {
    const articlesForBD: ArticleBD[] = articles.map(article => {
      const launchesId: string[] = []
      const eventsId: string[] = []
      const eventsProvider: string[] = []
      const launchesProvider: string[] = []

      article.events.forEach((event, index) => {
        eventsId.push(event.id.toString())
        eventsProvider.push(event.provider[index])
      })

      article.launches.forEach((launche, index) => {
        launchesId.push(launche.id.toString())
        launchesProvider.push(launche.provider[index])
      })

      return {
        id: article.id,
        eventsId,
        launchesId,
        eventsProvider,
        launchesProvider,
        featured: article.featured,
        imageUrl: article.imageUrl,
        newsSite: article.newsSite,
        publishedAt: new Date(article.publishedAt),
        summary: article.summary,
        title: article.title,
        url: article.url
      }
    })

    return articlesForBD
  }

  getArticles (articlesBD: ArticleBD[]): ArticlesClientResponse {
    const adapterArticles: ArticleData[] = articlesBD.map(article => {
      const events = article.eventsId.map((eventId, index) => {
        return {
          id: eventId.toString(),
          provider: article.eventsProvider[index]
        }
      })

      const launches = article.launchesId.map((launcheId, index) => {
        return {
          id: launcheId.toString(),
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
        publishedAt: article.publishedAt.toString(),
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
