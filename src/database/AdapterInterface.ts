import { ArticleBD } from '../useCases/ArticleBD'

export interface AdapterInterface {
  getArticles(start: number): Promise<ArticleBD[] | []>
  createArticlesForApi(articlesForBD: ArticleBD[]): Promise<void>
  getArticle(id: number): Promise<ArticleBD | null>
  postArticle(articleBd: ArticleBD): Promise<number>
  putArticle(articleBd: ArticleBD): Promise<string>
  deletArticle(id: number): Promise<string>
}
