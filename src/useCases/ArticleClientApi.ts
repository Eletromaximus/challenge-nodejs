import { Article } from '../entities/Article'
import { ArticleData } from '../entities/ArticleData'
import { ArticleBD } from './ArticleBD'
import { ArticleClient, IChange } from './ArticleClient'
import { ArticlesClientResponse, ArticleClientResponse } from './ArticleClientResponse'

export class ArticleClientApi implements ArticleClient {
  articlesForBD(articles: ArticleData[]): ArticleBD[] {
    const articlesForBD: ArticleBD[] = articles.map((article) => this.postArticle(article))

    return articlesForBD
  }

  getArticles(articlesBD: ArticleBD[]): ArticlesClientResponse {
    const adapterArticles: ArticleData[] = articlesBD.map((article) => this.getArticle(article))

    return adapterArticles
  }

  getArticle(articleDB: ArticleBD): ArticleClientResponse {
    const events = articleDB.eventsId.map((eventId, index) => {
      return {
        id: eventId.toString(),
        provider: articleDB.eventsProvider[index],
      }
    })

    const launches = articleDB.launchesId.map((launcheId, index) => {
      return {
        id: launcheId.toString(),
        provider: articleDB.launchesProvider[index],
      }
    })
    return Article.create({
      id: articleDB.id,
      featured: articleDB.featured,
      imageUrl: articleDB.imageUrl,
      newsSite: articleDB.newsSite,
      publishedAt: articleDB.publishedAt.toString(),
      summary: articleDB.summary,
      title: articleDB.title,
      url: articleDB.url,
      events,
      launches,
    })
  }

  postArticle(article: ArticleData): ArticleBD {
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
      url: article.url,
    }
  }

  changeArticle(props: IChange): void {
    throw new Error('Method not implemented.')
  }

  deleteArticle(id: number): void {
    throw new Error('Method not implemented.')
  }
}
