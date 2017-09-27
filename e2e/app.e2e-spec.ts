import { UserManagmentPage } from './app.po';

describe('user-managment App', () => {
  let page: UserManagmentPage;

  beforeEach(() => {
    page = new UserManagmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
