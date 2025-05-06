


// Intelligent React Components
;
const globals={"debounceTimer":null};
function fnFilterTodos(inputValue, todos) {
  const searchTerm = inputValue.toLowerCase();
  return todos.filter((todo) => todo.title.toLowerCase().includes(searchTerm));
}

export default function main(event, args) {
  const inputValue = event.target.value;

  if (globals.debounceTimer) {
    clearTimeout(globals.debounceTimer);
  }

  globals.debounceTimer = setTimeout(() => {
    if (!inputValue) {
      args.setFilteredTodos([]);
    } else {
      const filteredTodos = fnFilterTodos(inputValue, args._todos);
      args.setFilteredTodos(filteredTodos);
    }
  }, 300);
}





export const meta = {
 thoughts: "This prompt requires a function to filter an array of todos based on the input value, with case-insensitive matching and debouncing. If the input is empty setFilteredTodos to []. I'll use the input event to trigger the filtering logic and a mutation to update the filtered todos array. The input element will have a placeholder and a className.",
 expect: "The args object must contain a _todos array and a setFilteredTodos function. The input should have a placeholder and className attributes."
}
