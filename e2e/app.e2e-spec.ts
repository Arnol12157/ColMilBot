import { MaterialAngular2Page } from './app.po';

describe('material-angular2 App', () => {
  let page: MaterialAngular2Page;

  beforeEach(() => {
    page = new MaterialAngular2Page();
  });

  it('should have app-root', () => {
    page.navigateTo();
    expect(page.getAppRoot()).not.toBeNull();
  });
});
