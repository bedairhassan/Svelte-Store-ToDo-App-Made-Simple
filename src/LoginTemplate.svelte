<script>
    export let title, submit;

    import { logging } from "./store.js";
</script>

<main>
    Username<input type="text" bind:value={$logging.username} placeholder={$logging.username} /> <br/>
    Password<input type="password" bind:value={$logging.password} placeholder={$logging.password}/> <br/>
    <button on:click={submit}>{title}</button>
</main>
