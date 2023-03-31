import React, { useEffect, useState } from "react";

const TodoList = () => {
    const [todosData, setTodosData] = useState([]);

    useEffect(() => {
        fetch(`https://gorest.co.in/public/v1/todos`)
            .then((response) => response.json())
            .then((data) => {
                setTodosData(data?.data || []);
            });
    },[]);

    const formatDate = (date) => {
        let objectDate = new Date(date);
        let day = objectDate.getDate();

        let month = objectDate.getMonth();

        let year = objectDate.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <div className="todo-container">
            {(todosData || []).map((rec)=> {
                return <div className={"todo-list-item " + (rec.status)}>
                    <div>{rec.title}</div>
                    <div>Due By: <b>{formatDate(rec.due_on)}</b></div>
                </div>
            })}
        </div>
    )
}

export default TodoList;