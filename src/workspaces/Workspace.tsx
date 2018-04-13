export class Workspace {
    public props: any;
    // private database: any;
    // private state: any;

    invalidInputError(inputs: any) {
        console.error(`${this.constructor.name} had an error with inputs: `, inputs);
        return  {
            message: 'Workspace not valid for inputs',
            workspace: this.constructor.name,
            input: inputs,
        };
    }

    withProps(props: any) {
        this.props = props;
        return this;
    }

    run() {
        let defaults = {
            value: false,
            error: false,
            instance: this,
            children: [],
        };
        const results = this._run();
        return {...defaults, ...results};
    }

    _run(): any {
        return {};
    }
}