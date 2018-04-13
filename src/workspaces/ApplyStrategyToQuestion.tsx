import { Workspace } from './Workspace';
import { EstimateValue } from './EstimateValue';

export class ApplyStrategyToQuestion extends Workspace {
    _run() {
        const {strategy, question} = this.props;
        switch (strategy) {
            case 'Try multiplying the volume of the moon by its density.':
                switch (question) {
                    case 'How much does the moon weigh?':
                      const _volume = new EstimateValue();
                      const volume = _volume.execute({thingToEstimate: 'Volume of the moon'});
                      const _density = new EstimateValue();
                      const density = _density.execute({thingToEstimate: 'Density of the moon'});
                      return {
                            value: volume.value * density.value,
                            children: [volume.instance, density.instance]
                        };
                    default: 
                        return {
                            error: this.invalidInputError(this.props.question)
                        };
                }
            default:
                return {
                    error: this.invalidInputError(this.props.question)
                };
        } 
    }
}