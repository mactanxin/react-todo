import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.refs.itemName.focus();
    }

    onSubmit(event){
        event.preventDefault();
        var newItemValue = this.refs.newItemValue.value;

        if(newItemValue){
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }
    render() {
        return (
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." />
                <button type="submit" className="btn btn-default">Add</button>
            </form>
        );
    }
}