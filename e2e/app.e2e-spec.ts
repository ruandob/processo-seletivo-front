import { PortoAdminPage } from './app.po';

describe('porto-admin App', () => {
  let page: PortoAdminPage;

  beforeEach(() => {
    page = new PortoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
