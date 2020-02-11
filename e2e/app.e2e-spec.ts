import { NinjanetDirectoryPage } from './app.po';

describe('ninjanet-directory App', function() {
  let page: NinjanetDirectoryPage;

  beforeEach(() => {
    page = new NinjanetDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
