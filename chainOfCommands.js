const commandInput = document.querySelector("#command-input");
const argumentInput = document.querySelector("#argument-input");
const submit = document.querySelector("#submit-button");
const reset = document.querySelector("#reset-button");
const output = document.querySelector("#command-output");

function getCommands() {
    let commandValue = commandInput.value;
    let argumentValues = argumentInput.value.split("\n");
    argumentValues = argumentValues.filter(function(el) {
        return el != '';
    });

    chainCommands(commandValue, argumentValues);
}

function chainCommands(commandValue, argumentValues) {
    let commandWithArguments = [];
    for (let i = 0; i < argumentValues.length; i++) {
        let commandWithArgument = `${commandValue} ${argumentValues[i]}`
        if (i < argumentValues.length - 1) {
            commandWithArgument = commandWithArgument.concat(" &&");
        }
        commandWithArguments.push(commandWithArgument);
    }
    commandInput.value = "";
    argumentInput.value = "";

    appendCommands(commandWithArguments);
}

function appendCommands(commands) {
    for (let i = 0; i < commands.length; i++) {
        let appendListElement = document.createElement("li");
        appendListElement.textContent = commands[i];
        output.appendChild(appendListElement);
    }
}

function resetValues() {
    output.innerHTML = "";
}

submit.addEventListener("click", getCommands);
reset.addEventListener("click", resetValues);
