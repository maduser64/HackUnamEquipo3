import { Equipo3Page } from './app.po';

describe('equipo3 App', () => {
  let page: Equipo3Page;

  beforeEach(() => {
    page = new Equipo3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
