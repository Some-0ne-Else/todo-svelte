<script lang="ts">
	export let store;
	export let done: boolean;
</script>

<ul class="todos">
	{#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
		<li
			class:done
		>
			<label>
				<input
					type="checkbox"
					checked={todo.done}
					on:change={(e) => store.mark(todo, e.currentTarget.checked)}
				/>

				<span>{todo.label}</span>

				<button on:click={() => store.delete(todo)} aria-label="Remove item" />
			</label>
		</li>
	{/each}
</ul>

<style>

	label {
		width: 100%;
		height: 100%;
		display: flex;
    gap: 4px;
	}

	span {
		flex: 1;
	}

	button {
		background-image: url(/src/images/remove.svg);
    background-position: center;
    background-size: contain;
    height: 20px;
    width: 20px;
    border: none;
    background-color: transparent;
	}

  button:hover {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }

  li {
    padding: 10px;
    box-shadow: 0px 0px 10px 1px rgb(155 184 222);
    border-radius: 8px;
  }

  li:hover, label:hover, input:hover {
    cursor: pointer;
  }

  .done {
    text-decoration: line-through;
    background-color: lightgray;
  }

</style>
