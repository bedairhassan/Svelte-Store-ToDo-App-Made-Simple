<script>
	import Tasks from "./Tasks.svelte";
	import Login from "./Login.svelte";
</script>

<main>
	<div class="row">
		<div class="column"><Login /></div>
		<div class="columntwo"><Tasks /></div>
	</div>
</main>

<style>
	.column {
		float: left;
		width: 50%;
	}

	.columntwo{

		
		margin-top: 250px;
		margin-bottom: 50px;
		margin-right: 50px;
		margin-left: 50px;
	}

	/* Clear floats after the columns */
	.row:after {
		

		content: "";
		display: table;
		clear: both;
	}
</style>
