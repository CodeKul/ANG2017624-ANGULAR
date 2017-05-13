import { GeneralPurposePage } from './app.po';

describe('general-purpose App', () => {
  let page: GeneralPurposePage;

  beforeEach(() => {
    page = new GeneralPurposePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
