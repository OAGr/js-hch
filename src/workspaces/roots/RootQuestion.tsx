import { Workspace } from '../Workspace';
import { GenericQuestion } from '../GenericQuestion';

export class RootQuestion extends Workspace {
    public question: any;

    constructor(question: any) {
        super();
        this.question = question;
    }

    _run() {
        const subQuestion = new GenericQuestion();
        return subQuestion.run({question: this.question});
    }
}