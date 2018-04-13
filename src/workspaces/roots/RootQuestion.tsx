import { Workspace } from '../Workspace';
import { GenericQuestion } from '../GenericQuestion';

export class RootQuestion extends Workspace {
    public question: any;

    run({question}: any) {
        const subQuestion = new GenericQuestion();
        const {value, error, instance} = subQuestion.run({question});
        return {value, error, instance: this, children: instance};
    }

    children({question}: any) {
        const subQuestion = new GenericQuestion();
        let first = subQuestion.run({question});
        return [first];
    }
}