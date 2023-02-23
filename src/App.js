import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoList from './component/TodoList';
import { v4 } from 'uuid';

const TEST_VER1 = "LIST_DATA";


function App() {

    const [todoList, setTodoList] = useState([])
    const [value, setValue] = useState("")
    const [dataComplate, setDataComplate] = useState([])

    useEffect(() => {
        const checktoragedTodoList = localStorage.getItem(TEST_VER1);
        if (checktoragedTodoList) {
          setTodoList(JSON.parse(checktoragedTodoList))
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem(TEST_VER1, JSON.stringify(todoList));
      },[todoList])

    const handleChange = useCallback((e) =>{
        setValue(e.target.value)
    },[])
    const handleOnclick = useCallback(() =>{
        setTodoList([{id: v4(), name:value, isCompleted: false},...todoList])
    },[value, todoList])

    const onCheckBtnClick = useCallback((id) => {
        setTodoList((prevState) =>
          prevState.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: true } : todo
          )
        )
        const result = todoList.filter(work=>work.isCompleted === true)
        // setDataComplate(...dataComplate, todoList )
        setDataComplate({...dataComplate, result})
      }, [todoList, dataComplate]);

      console.log(dataComplate)
      //chưa kịp làm page compalate

    
      // const result = todoList.filter(work=>work.isCompleted === true)
      // setDataComplate(result)

      const handleDelete = useCallback((id) => {
        setTodoList((prevState) =>
          prevState.filter((todo) =>(todo.id !== id)
        ))

      }, []);


    return ( 
        <div className='container'>
            <div className='logo'>#todo</div>
            <Header/>
            <div className='form-input'>
                <input type='text' onChange={handleChange}></input>
                <button onClick={handleOnclick}>ADD</button>
            </div>
            <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick} handleDelete={handleDelete} />
        </div>
    )
}

export default App;