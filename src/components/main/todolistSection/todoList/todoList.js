import '../../../../components/style.css';

const TodoList = () => {
    const list = [
        {
            index: 1,
            itemText: "Go to Market",
            tickClass: "tick"
        },
        {
            index: 2,
            itemText: "Go to Market",
            tickClass: "tick"
        },
        {
            index: 3,
            itemText: "Go to Market",
            tickClass: "tick"
        },
        {
            index: 4,
            itemText: "Go to Market",
            tickClass: "not-tick"
        },
        {
            index: 5,
            itemText: "Go to Market",
            tickClass: "tick"
        },
        {
            index: 6,
            itemText: "Go to Market",
            tickClass: "not-tick"
        },
    ]
    return (
        <div className="todolist-col-1">
            <h4 className="browser-col-1-title">Todo list</h4>
            <div className="todoList">
                {
                    list.map(({ index, itemText, tickClass }) => (
                        <div className="todo-list-item" key={index}>
                            <i className={`fa fa-check ${tickClass}`}></i>
                            <p className="item-text">{itemText}</p>
                            <i className="fa fa-trash deleteIcon"></i>
                        </div>
                    ))
                }
            </div>

            <div className="add-todo">
                <input type="text" placeholder="Write a new item and hit Enter" />
                <button className="main-btn-date todoList-btn">Submit</button>
            </div>
        </div>
    )
}

export default TodoList;