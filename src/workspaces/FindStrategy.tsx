import { Workspace } from './Workspace';

export class FindStrategy extends Workspace {
    _run() {
        const {question} = this.props;
        switch (question) {
            case 'How much does the moon weigh?':
            return {
                value: 'Try multiplying the volume of the moon by its density.',
            };
            default:
            return {
                error: this.invalidInputError(this.props.question)
            };
        } 
    }
}