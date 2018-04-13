import { Workspace } from './Workspace';

export class EstimateValue extends Workspace {
    _run() {
        const {thingToEstimate} = this.props;
        switch (thingToEstimate) {
            case 'Volume of the moon':
                return {
                    value: 5,
                };
            case 'Density of the moon.':
                return {
                    value: 3,
                };
            default:
                return {
                    error: this.invalidInputError(this.props.thingToEstimate)
                };
        } 
    }
}