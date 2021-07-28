<script>
	import { items } from "./store";


	let display;
	$: items.subscribe(last=>display=last)

	let item;
	const submit = () => items.update((last) => [...last, item]);
</script>

<main>
	<table>
		<thead>
			<th>Name of Task</th>
		</thead>

		<tbody>
			{#if display.length>0}
				{#each display as item}
					<tr>
						<td>{item}</td>
					</tr>
				{/each}
			{/if}

			<tr>
				<td><input type="text" bind:value={item} /></td>
				<td><button on:click={submit}>add task</button></td>
			</tr>
		</tbody>
	</table>
</main>
