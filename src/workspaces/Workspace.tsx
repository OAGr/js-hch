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

    execute(inputs: any) {
        this.props = inputs;
        return this.run();
    }

    run() {
        return this._run();
    }

    _run() {
        throw new Error('Workspace not implemented!');
    }
}