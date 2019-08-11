import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AuditTrail } from '../audit-trail.entity';

@Injectable()
export class AuditTrailService extends TypeOrmCrudService<AuditTrail> {

    constructor(@InjectRepository(AuditTrail) repo) {
        super(repo)
    }
}
