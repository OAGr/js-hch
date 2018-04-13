import { Workspace } from './Workspace';
import { FindStrategy } from './FindStrategy';
import { ApplyStrategyToQuestion } from './ApplyStrategyToQuestion';

export class GenericQuestion extends Workspace {
    _run() {
        const {question} = this.props;
        switch (question) {
            case 'What time is it?':
                return {
                    value: '3:35',
                };
            case 'How much does the moon weigh?':
                const child = new FindStrategy();
                const strategy = child.execute({question});
                const toChild = new ApplyStrategyToQuestion();
                const response = toChild.execute({
                    strategy: strategy.value,
                    question: question
                });
                return {...response, instance: this, children: [strategy.instance, response.instance]};
            case 'Apply strategy (Try multiplying the volume of the moon by its density.) to question (How much does the moon weigh?)':
                return {
                    value: '34'
                };
            default:
                return {
                    error: this.invalidInputError(this.props.question)
                };
        } 
    }
}