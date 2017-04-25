import { Ng2AzureADAuthenticationPage } from './app.po';

describe('ng2-azure-adauthentication App', () => {
  let page: Ng2AzureADAuthenticationPage;

  beforeEach(() => {
    page = new Ng2AzureADAuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
