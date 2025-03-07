import React,{FunctionComponent as FC} from "react";
import TODOI from "../interfaces/TodoInterface";

interface Props{
    todos : TODOI[];
}

const List : FC<Props> = ({todos}) => {
   return<div className="col-md-6 mx-auto my-5">
    {
        todos.map((todo: TODOI ,index: number): any =>(
           <div key={index} className ="d-flex w-100">
            <h1>className = {'text-center py-2 $(todo.completed ?"completed" : null}'} 
                
            </h1>



            </div>

        ))
    }

   </div>
}


export default List;