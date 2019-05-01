import { InquisitorClient } from '../src/index';
import { expect, assert } from 'chai';
import { describe, before } from 'mocha';
import * as sinon from 'sinon';

const serviceName = 'inquisitor';

afterEach(() => {
  sinon.restore();
});
describe('Inquisitor Client Test Suite:', () => {
  describe('when fetching rules', () => {
    let stub: sinon.SinonSpy;
    beforeEach(() => {
      stub = sinon.stub(InquisitorClient['alClient'], 'fetch');
    });
    afterEach(() => {
      stub.restore();
    });
    it('should call fetch() on the ALClient instance', async() => {
      await InquisitorClient.getRules();
      expect(stub.callCount).to.equal(1);
    });
  });
    
});
