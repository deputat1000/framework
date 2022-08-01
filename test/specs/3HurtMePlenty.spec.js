const CalculatorPage = require('../pages/cloud.google.com/CalculatorPage');
const {HurtMePlentyEntities} = require('../../test/entities/Entities');

describe('Hurt Me Plenty', () => {
  let page;
  let entities;

  before(async() => {
    page = new CalculatorPage();
    entities = new HurtMePlentyEntities();
    
    await page.open();
    await page.search();
    await page.select();
    await page.addToEstimate();
  });

  it('shoud match to selected VM Class', async() => {
    const estimatedVMClass = await page.getVMClass();
    expect(estimatedVMClass).toEqual(entities.vmClass);
  });
  it('shoud match to selected Instance type', async() => {
    const estimatedInstanceType = await page.getInstanceType();
    expect(estimatedInstanceType).toContain(entities.instanceType);
  });
  it('shoud match to selected Region', async() => {
    const estimatedRegion = await page.getRegion();
    expect(estimatedRegion).toContain(entities.region);
  });
  it('shoud match to selected Local SSD', async() => {
    const estimatedlocalSSD = await page.getLocalSSD();
    expect(estimatedlocalSSD).toContain(entities.localSSD);
  });
  it('shoud match to selected Commitment term', async() => {
    const estimatedCommitmentTerm = await page.getCommitmentTerm();
    expect(estimatedCommitmentTerm).toContain(entities.commitmentTerm);
  });
});
