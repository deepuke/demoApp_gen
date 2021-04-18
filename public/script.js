(async function init() {
    const response = await fetch('http://localhost:3050/get-profile');
    console.log("response", response);
    const user = await response.json();
    console.log(JSON.stringify(user));

    $('#input-name').val(user.name ? user.name : 'Anna Smith');
    $('#input-email').val(user.email ? user.email : 'anna.smith@example.com');
    $('#input-interests').val(user.interests ? user.interests : 'coding');
})();