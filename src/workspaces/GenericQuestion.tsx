import { Workspace } from './Workspace';

export class GenericQuestion extends Workspace {
    _run() {
        if (this.props.question === 'What time is it?') {
            return {
                value: '3.45',
            };
        }
        const error = this.invalidInputError(this.props.question);
        return {
            error,
        };
    }
}