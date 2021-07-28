<script>
    // your script goes here
    import { login, users, logging, signedin } from "./store.js";
    let title = login.signin;

    let notification = { flag: false, text: "" };

    let usersArray;
    $: users.subscribe((last) => (usersArray = last));

    const resetNotification = () => {
        // notification
        notification.flag = false;
        notification.text = "";
    };

    let color;
    const setNotification = (text, colorGuest) => {
        // notification
        notification.flag = true;
        notification.text = text;

        color = colorGuest;
    };

    const submitsignin = () => {
        resetNotification();

        let foundUsername = usersArray.filter(
            (item) =>
                item.username === $logging.username &&
                item.password === $logging.password
        );
        foundUsername = foundUsername[0];
        foundUsername = foundUsername !== undefined;

        if (foundUsername) {
            $signedin.user = $logging.username;

            setNotification("Signing in", "green");
        } else {
            setNotification("Username or password is incorrect", "red");
        }
    };

    const submitsignup = () => {
        resetNotification();

        let foundUsername = usersArray.filter(
            (item) => item.username === $logging.username
        );
        if (foundUsername.length == 0) {
            foundUsername = false;
        } else {
            foundUsername = foundUsername[0];
            foundUsername = foundUsername !== undefined;
        }

        let username = $logging.username;
        let password = $logging.password;

        if (!foundUsername) {
            users.update((last) => [...last, { username, password }]);

            //notification
            setNotification("New User Has Been Added", "green");
        } else {
            //notification
            setNotification("User already exists.", "red");
        }
    };

    import LoginTemplate from "./LoginTemplate.svelte";
</script>

<main>
    {#if $signedin.user == undefined}
        {#if notification.flag}
            <h3
                style={color === "green"
                    ? "color: rgb(53, 102, 0);"
                    : "color: rgb(128, 0, 0)"}
            >
                {notification.text}
            </h3>
        {/if}

        <!-- {#if login.signin} -->
        <!-- loginsignin -->
            <button
                on:click={() => {
                    title = login.signup;
                    resetNotification();
                }}
                > 👉signup
            </button>
        <!-- {:else} -->
        <!-- loginsignup -->
            <button
                on:click={() => {
                    title = login.signin;
                    resetNotification();
                }}>👉signin</button
            >
        <!-- {/if} -->

        <LoginTemplate
            {title}
            submit={title === login.signin ? submitsignin : submitsignup}
        />
    {:else}
        <h1>Welcome {$signedin.user}</h1>
    {/if}
</main>
