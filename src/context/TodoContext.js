import { createContext, useState } from "react";

export const todoContext = createContext();

export function TodoContextProvider({children}){
    const [listTodo,setListTodo]=useState([]);
    return (
        <todoContext.Provider
          value={{ listTodo, setListTodo }}
        >
          {children}
        </todoContext.Provider>
      );
}