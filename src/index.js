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
    let context = `The poem should not have a title and should be displayed in HTML form with each line separated by <br/> and the poem should not be more than 5 lines. The last line should be signed with <strong>SheCodes Ai</strong>`;
    
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
}

let inputSearch = document.querySelector("#submit-btn");
inputSearch.addEventListener("click", getPoem);