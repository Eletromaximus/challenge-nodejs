/* eslint-disable no-undef */
import { ArticleClientApi } from '../ArticleClientApi'

describe('Test Rest Api', () => {
  test('Test add post error', () => {
    const articleClientApi = new ArticleClientApi()
    const article = {
      id: 16000,
      featured: false,
      imageUrl: 'asdfad',
      newsSite: 'SpaceNewsFake',
      publishedAt: 'Wed Jun 29 2022 11:41:23 GMT-0300 (Horário Padrão de Brasília)',
      summary: 'Article fake',
      title: 'Don`t believe in this article',
      url: 'https://cake.is.lie',
      events: [],
      launches: [],
    }

    const response = articleClientApi.postArticle(article)
    expect(response).toEqual({
      id: 16000,
      eventsId: [],
      launchesId: [],
      eventsProvider: [],
      launchesProvider: [],
      featured: false,
      imageUrl: 'asdfad',
      newsSite: 'SpaceNewsFake',
      publishedAt: new Date('Wed Jun 29 2022 11:41:23 GMT-0300 (Horário Padrão de Brasília)'),
      summary: 'Article fake',
      title: 'Don`t believe in this article',
      url: 'https://cake.is.lie',
    })
  })
})
