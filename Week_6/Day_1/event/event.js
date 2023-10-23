var h2 = document.querySelector("h2");
        h2.onclick = function() {
            writeIntoConsole();
        };

        function writeIntoConsole() {
            console.log("Button clicked!");
            alert("Open console!");
            const newH2 = document.getElementsByTagName("h2");
            const insert = document.createTextNode("I have changed!");
            newH2.appendChild(insert);
        }