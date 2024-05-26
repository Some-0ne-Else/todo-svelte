<script lang="ts">
	import { createTodoStore } from '../store/index';
	import TodoList  from '../components/TodoList/index.svelte';
	import { initialItems } from '../mocks';

	const todos = createTodoStore(initialItems);
</script>

<div class="board">
	<input
		placeholder="what needs to be done?"
		on:keydown={(e) => {
			if (e.key !== 'Enter') return;

			todos.add(e.currentTarget.value);
			e.currentTarget.value = '';
		}}
	/>

	<div class="todo">
		<h2>todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class="done">
		<h2>done</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 40em;
		margin: 0 auto;
	}

  .todo, .done {
    grid-column: 1 / 3;
  }

	.board > input {
    font-family: "Montserrat", sans-serif;
		font-size: 1.4em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
    border-radius: 8px;
    border: none;
    box-shadow: 0px 0px 12px 3px rgba(155,218,222,1);
	}

  input:focus-visible {
    outline: 1px solid #9bdade;
    border-radius: 8px;
  }

	h2 {
		font-size: 2em;
		font-weight: 200;
    text-transform: uppercase;
	}
</style>
