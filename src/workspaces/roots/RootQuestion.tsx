import { Workspace } from '../Workspace';
import { GenericQuestion } from '../GenericQuestion';

export class RootQuestion extends Workspace {
    public question: any;

    run() {
        const subQuestion = new GenericQuestion();
        const {value, error, instance} = subQuestion.withProps({question: this.props.question}).run();
        console.log('HAS CHILD?', instance);
        return {value, error, instance: this, children: [instance]};
    }
}