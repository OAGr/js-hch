import { Workspace } from './Workspace';

export class GenericQuestion extends Workspace {
    run() {
        if (this.props.question === 'What time is it?') {
            return {value: '3.45', error: false};
        }
        const error = this.invalidInputError(this.props.question);
        return {
            value: false,
            error,
            instance: this,
        };
    }
}