import { Workspace } from './Workspace';

export class GenericQuestion extends Workspace {
    run(inputs: any) {
        if (inputs.question === 'What time is it?') {
            return {value: '3.45', error: false};
        }
        const error = this.invalidInputError(inputs);
        return {
            value: false,
            error,
            instance: this,
        };
    }
}