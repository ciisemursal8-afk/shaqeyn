


// Selectors
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".buttons button");

// Button Events
buttons.forEach(button => {

    button.addEventListener("click", function() {

        const value = button.textContent;

        if (value === "AC") {

            display.value = "";

        }

        else if (value === "DEL") {

            display.value = display.value.slice(0, -1);

        }

        else if (value === "=") {

            try {

                if (display.value === "") return;

                const result = Function(
                    '"use strict"; return (' + display.value + ')'
                )();

                if (!Number.isFinite(result)) {
                    throw new Error("Invalid calculation");
                }

                display.value = result;

            } catch (error) {

                display.value = "Error";

            }

        }

        else {

            if (display.value === "Error") {
                display.value = "";
            }

            display.value += value;

        }

    });

});
