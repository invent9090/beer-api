import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { StateService } from './state.service';
import { State } from './../state.entity';

@Crud({
    model: {
        type: State,
    },
})


@Controller('states')
export class StateController implements CrudController<State> {

    constructor(public service: StateService) { }

}
