function addPoem(event){
    event.preventDefault();

    new Typewriter("#poem", {
      strings: `I love you<br>
        I love you when you're sad<br>
        I love you when you're happy<br>
        I love you...Always`,
      autoStart: true,
      delay: 15,
      cursor: "",
    });
}

let inputSearch = document.querySelector("#submit-btn");
inputSearch.addEventListener("click", addPoem)