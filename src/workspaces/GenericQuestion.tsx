import { Workspace } from './Workspace';
import { FindStrategy } from './FindStrategy';
import { ApplyStrategyToQuestion } from './ApplyStrategyToQuestion';

const moonWeigh = ({ question, instance }: any) => {
    if (question !== 'How much does the moon weigh?') { return false; }
    const strategy = (new FindStrategy()).execute({question});
    const toChild = new ApplyStrategyToQuestion();
    const response = toChild.execute({
        strategy: strategy.value,
        question: question
    });
    return { ...response, instance, children: [strategy.instance, response.instance] };
};

const timeIsIt = ({ question, instance }: any) => {
    if (question !== 'What time is it?') { return false; }
    return {
        value: '3:35',
    };
};

export class GenericQuestion extends Workspace {
    _run() {
        const { question } = this.props;
        const instance = this;
        const params = { question, instance };
        return moonWeigh(params) ||
            timeIsIt(params) ||
            {
                error: this.invalidInputError(this.props.question)
            };
    }
}