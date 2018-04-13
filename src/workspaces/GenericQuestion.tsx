import { Workspace } from './Workspace';

export class GenericQuestion extends Workspace {
    _run(inputs: any) {
        if (inputs.question === 'What time is it?') {
            return {value: '3.45', error: false};
        }
        const error = this.invalidInputError(inputs);
        console.log('ERROR IS ', error);
        return {
            value: false,
            error 
        };
    }
}