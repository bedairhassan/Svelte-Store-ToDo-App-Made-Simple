<script>
    import { items } from "./store";

    let display;
    $: items.subscribe((last) => (display = last));

    let name, type;
    const submit = () => items.update((last) => [...last, { name, type }]);

    let availableTasks;
    $: availableTasks = display.length > 0;

    import {signedin} from './store'
</script>

<main>
    {#if $signedin.user !== undefined}
        <table>
            <thead>
                {#if availableTasks}
                    <th>Name of Task</th>
                    <th>Type of Task</th>
                {/if}
            </thead>

            <tbody>
                {#if availableTasks}
                    {#each display as item}
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                        </tr>
                    {/each}
                {/if}

                <tr>
                    <td><input type="text" bind:value={name} /></td>

                    <select bind:value={type}>
                        <option value="school">school</option>
                        <option value="work">work</option>
                    </select>

                    <td><button on:click={submit}>add task</button></td>
                </tr>
            </tbody>
        </table>
    {/if}
</main>
