import { Workspace } from '../Workspace';
import { GenericQuestion } from '../GenericQuestion';

export class RootQuestion extends Workspace {
    public question: any;

    _run() {
        const subQuestion = new GenericQuestion();
        const {value, error, instance} = subQuestion.execute({question: this.props.question});
        return {value, error, children: [instance]};
    }
}