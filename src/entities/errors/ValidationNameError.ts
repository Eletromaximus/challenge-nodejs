export class ValidateNameError extends Error {
  public name: string

  constructor () {
    super('Validation Error')
    this.name = 'ValidationName'
  }
}
