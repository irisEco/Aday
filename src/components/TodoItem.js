class TodoItem extends React.Component{
    //改变任务是否已经完成的状态
    handlerChange(){
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index,isDone);
    }
    //鼠标移入事件
    handlerMouseOver(){
        React.findDOMNode(this).style.background = '#eee';
        React.findDOMNode(this.refs.delButton).style.display = 'inline-block';
    }
    //鼠标移出事件
    handlerMouseOut(){
        React.findDOMNode(this).style.background = '#fff';
        React.findDOMNode(this.refs.delButton).style.display = 'none';

    }
    //删除当前任务
    handlerDelete(){
        this.props.delteTodo(this.props.index);
    }
    render(){
        let className = this.props.isDone? 'task-done':'';
        return(
            <li onMouseOver={this.handlerMouseOver.bind(this)}
             onMouseOut={this.handlerMouseOut.bind(this)}>
             <label>
                 <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
                 <span className={className}>{this.props.text}</span>
             </label>
             <button ref = "delbutton" className="btn btn-danger" onClick={this.handlerDelete.bind(this)}>删除</button>

            </li>
        )
    }



}