export class Workspace {
    // private database: any;
    // private state: any;

    constructor() {
        // this.database = database;
    }

    invalidInputError(inputs: any) {
        console.error(`${this.constructor.name} had an error with inputs: `, inputs);
        return  {
            message: 'Workspace not valid for inputs',
            workspace: this.constructor.name,
            input: inputs,
        };
    }

    run(inputs: any) {
        return this._run(inputs);
    }

    _run(inputs: any) {
        throw new Error('Workspace not implemented!');
    }
}