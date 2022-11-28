import '../../../components/style.css';
import SalesList from './salesList/salesList';
import TodoList from './todoList/todoList';
import UserList from './userList/userList';

const TodoListSection = () => {
    return(
        <div className="main-todolist-div">
            <TodoList />
            <SalesList />
            <UserList />
        </div>
    )
}
export default TodoListSection;