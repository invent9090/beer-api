import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { AuditTrailService } from './audit-trail.service';
import { AuditTrail } from '../audit-trail.entity';

@Crud({
    model: {
        type: AuditTrail,
    },
})

@Controller('audit-trails')
export class AuditTrailController implements CrudController<AuditTrail> {

    constructor(public service: AuditTrailService) { }

}

