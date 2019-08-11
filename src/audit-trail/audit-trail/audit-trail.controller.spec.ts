import { Test, TestingModule } from '@nestjs/testing';
import { AuditTrailController } from './audit-trail.controller';

describe('AuditTrail Controller', () => {
  let controller: AuditTrailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditTrailController],
    }).compile();

    controller = module.get<AuditTrailController>(AuditTrailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
