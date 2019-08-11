import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditTrailService } from './audit-trail/audit-trail.service';
import { AuditTrailController } from './audit-trail/audit-trail.controller';
import { AuditTrail } from './audit-trail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditTrail])],
  providers: [AuditTrailService],
  controllers: [AuditTrailController]
})
export class AuditTrailModule { }
