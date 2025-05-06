"use client";
import ComponentWithIcon from "@/components/ComponentWithIcon";
import { UnionType } from "@/utils/utils";
import {
  AIButton,
  AIButtonProps,
  AIForm,
  AIFormProps,
  AIInput,
  AIInputProps,
} from "intelligent-react-components";
import React, { SetStateAction, useState } from "react";

interface TODOS {
  title: string;
  due: string;
}

export default function MiniAppTodo({
  setJSON,
}: {
  setJSON: React.Dispatch<SetStateAction<UnionType>>;
}) {
  const [todos, setTodos] = useState<TODOS[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<TODOS[]>([]);

  const taskFormPrompt: AIFormProps = {
    prompt:
      "This is a form in a personal to-do application. It has fields for title and date (disable past dates). Upon submission push the task to &setTodos array and push the new task to localStorage using 'myItems' key. This form goes inside #add-item-form dialogBox so close it upson successful operation and reset the form.",
    listener: "onSubmit",
    filename: "createTodoForm",
    mutation: [
      {
        id: "setTodos",
        mutate: setTodos,
        returnFormat: "push object with title and due",
      },
    ],
    styleHint: "Use proper CSS to style the form and its fields.",
  };
  const addTaskPrompt: AIButtonProps = {
    prompt:
      "It is a button in to-do application, upon click it open's #add-item-form dialog box as modal.",
    filename: "showCreateItemForm",
    listener: "onClick",
    label: "+ Add Task",
  };
  const searchBarPrompt: AIInputProps = {
    feedback: "when search param is empty $setFilteredTodos should be []",
    prompt:
      "a function that filter the _todos using title key against the input. The match should be case insensitive. set the resultant array to $setFilteredTodos. Create with a debouce of 300ms.",
    filename: "filterTodos",
    listener: "onInput",
    supportingProps: {
      variables: {
        _todos: todos,
      },
    },
    type: "text",
    attributes: {
      placeholder: "Filter by Title (Powered by React Genai)",
      className: "w-full border-2 rounded p-1",
    },
    mutation: [
      {
        id: "setFilteredTodos",
        mutate: setFilteredTodos,
        returnFormat: "array",
      },
    ],
  };

  return (
    <div className="bg-white h-full w-full text-black p-3">
      <dialog
        id="add-item-form"
        className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <AIForm {...taskFormPrompt} />
      </dialog>
      <div className="w-full max-w-[500px] p-2.5 rounded bg-gray-200 min-h-full">
        <div className="flex justify-between items-center">
          <h1 className="text-center font-bold text-2xl">To-do Application</h1>
          <ComponentWithIcon
            Component={<AIButton {...addTaskPrompt} />}
            callback={() => setJSON(addTaskPrompt)}
          />
        </div>
        <ComponentWithIcon
          Component={<AIInput {...searchBarPrompt} />}
          callback={() => setJSON(searchBarPrompt)}
        />

        <ul className=" mx-2 text-sm">
          {(filteredTodos.length ? filteredTodos : todos)?.map(
            (todo, index) => (
              <li key={index} className="flex justify-between items-center">
                <p>{todo?.title}</p>
                <AIButton
                  prompt={`upon click delete a todo $titleToDelete by updating $setTodos. use prev to get all todos.`}
                  filename="deleteTodo"
                  listener="onClick"
                  label="x"
                  supportingProps={{
                    utils: {
                      $titleToDelete: todo.title,
                    },
                  }}
                  mutation={[
                    {
                      id: "setTodos",
                      mutate: setTodos,
                      returnFormat: "array",
                    },
                  ]}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
