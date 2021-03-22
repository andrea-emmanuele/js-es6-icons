const showAll = () => {
    $("option#all").prop("disabled", "true");

    icons.forEach((icon) => {
        if (icon.type === "animal")
            $("main > .container").append(`<div class="card"><i class="animal ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
        if (icon.type === "vegetable")
            $("main > .container").append(`<div class="card"><i class="vegetable ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
        if (icon.type === "user")
            $("main > .container").append(`<div class="card"><i class="user ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
    });
};

const showAnimals = () => {
    $("option#animals").prop("disabled", "true");

    icons.forEach((icon) => {
        if (icon.type === "animal")
            $("main > .container").append(`<div class="card"><i class="animal ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
    });
};

const showVegetables = () => {
    $("option#vegetables").prop("disabled", "true");

    icons.forEach((icon) => {
        if (icon.type === "vegetable")
            $("main > .container").append(`<div class="card"><i class="vegetable ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
    });
};

const showUsers = () => {
    $("option#users").prop("disabled", "true");

    icons.forEach((icon) => {
        if (icon.type === "user")
            $("main > .container").append(`<div class="card"><i class="user ${icon.family} ${icon.prefix}${icon.name}"></i></div>`);
    });
};

showAll();

const show = () => {
    $("main > .container").html("");
    $("option").removeAttr("disabled");

    const select = $("#filter").val();

    switch (select) {
        case "all": showAll(); break;

        case "animals": showAnimals(); break;

        case "vegetables": showVegetables(); break;

        case "users": showUsers(); break;
    }
};