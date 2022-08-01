const PastePage = require('../../test/pages/pastebin.com/PastePage');
const {BringItOnEntities} = require('../../test/entities/Entities');

describe('Bring It On', () => {
  let page;
  let entities;

  before(async() => {
    page = new PastePage();
    entities = new BringItOnEntities();
    
    await page.open();
    await page.createPaste(entities.code, entities.name, entities.syntax);
  });

  it('the page title should match the entered name', async() => {
    expect(browser).toHaveTitleContaining(entities.name);
  });
  it('should create new paste with selected syntax', async() => {
    const pasteSyntax = await page.getPasteSyntax();
    expect(pasteSyntax).toEqual(entities.syntax);
  });
  it('should create new paste with entered code', async() => {
    const pasteCode = await page.getPasteCode();
    expect(pasteCode).toEqual(entities.code);
  });
});
