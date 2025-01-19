function displayPoem(response){
    

    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 15,
      cursor: "",
    });
}

function getPoem(event){
    event.preventDefault();

    let apiKey = "fa483db98dc0o4b7fc5fdbea841a31ta";
    let searchInput = document.querySelector('#search-input');
    let prompt = `Generate a poem about: ${searchInput.value}`;
    let context = `Generate a poem in html form with each line separated by <br/>, the poem should NOT have a title and the poem should not be more than 5 lines. The last line should be signed with <strong>Nguli AI</strong>`;
    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    let poem = document.querySelector("#poem");
    poem.classList.remove("hidden");
    poem.innerHTML = `<div class="generating">⏳Generating poem about ${searchInput.value}</div>`

    axios.get(apiUrl).then(displayPoem);
}

let inputSearch = document.querySelector("#submit-btn");
inputSearch.addEventListener("click", getPoem);