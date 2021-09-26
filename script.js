// Create elements and append inside body starts here


// DIV ELEMENT1 TO DISPLAY
const smallcontainer = document.createElement("div")
smallcontainer.innerHTML = "Search your GIT HUB Details with your name"
smallcontainer.id = "smallcontainer"
document.body.appendChild(smallcontainer);


// DIV ELEMENT2 START HERE
const container1 = document.createElement('div')
container1.className = 'container'



// Create element and append here in container1
const inputBox = document.createElement('input')
document.body.appendChild(inputBox)
container1.appendChild(inputBox)


// Create element and append here in container1
const search = document.createElement('button')
search.innerHTML = 'Search'
container1.appendChild(search)
document.body.appendChild(container1)


// Async function starts here

async function repo() {

    try {
        let user = inputBox.value

        // to reset the input value reset() is used similar for other
        inputBox.value = ''
        container2.innerHTML = ''
        container3.innerHTML = ''

        const response = await fetch(`https://api.github.com/users/${user}/repos`)
        const data = await response.json();

        console.log(data)

        // appendData funtion called here
        appendData(data)
            
        } catch (error) {
            console.log(error, " unable to fetch data")
            
        }
    

}

//  Append data functions  done with for loop


            // DIV ELEMENT2 & 3 created HERE

            const container2 = document.createElement('div')
            container2.className = 'container'

            const container3 = document.createElement('div')
            container3.className = 'container'



function appendData(data) {

        // Elemets to insert inside container2  STARTS HERE
        const total_repos = document.createElement('h1')
        total_repos.innerHTML = `Total Repos : ${data.length}`
        container2.appendChild(total_repos)
        
        // Elements to insert inside container 2
        const img = document.createElement('img')
        img.src = data[0].owner.avatar_url;
        container2.appendChild(img)

        document.body.appendChild(container2)

        // Elements to insert inside container2  ENDS HERE



    for (let i = 0; i < data.length; i++) {


       


        // CREATE ELEMENT TO PUT IN CONTAINER 3

        const repo_url          = document.createElement('a')
        const fork_counts       = document.createElement('h5')
        const stargazers_counts = document.createElement('h5')
        const languages         = document.createElement('h4')
        const names             = document.createElement('h3')

        
        // ASSIGN VARIABLE VALUE WITHH ITERATING DATA

        repo_url.href               =   data[i].html_url
        repo_url.innerHTML          =  `Repo Url    : ${data[i].html_url}`
        fork_counts.innerHTML       =  `Forks count : ${data[i].forks_count}`
        stargazers_counts.innerHTML =  `Stars count : ${data[i].stargazers_count}`
        languages.innerHTML         =  `Languages   : ${data[i].language}` 
        names.innerHTML             =  `Repo Name   : ${data[i].name}`

         // CREATE A DIV ELEMENT TO APPEND IN INSIDE CONTAINER3 ELEMENT
         const smallbox = document.createElement('div')
         smallbox.className = 'smallbox'

        // APPEND ASSIGNED VARIABLE IN A DIV ELEMENT
        smallbox.appendChild(names)
        smallbox.appendChild(languages)
        smallbox.appendChild(fork_counts)
        smallbox.appendChild(stargazers_counts)
        smallbox.appendChild(repo_url)

        
        // APPEND THE SMALLBOX (DIV ELEMENT)=>CONTAINER 3 ( DIV ELEMENT)
        container3.appendChild(smallbox)

    }
        // APPEND  CONTAINER 3 TO DOM
        document.body.appendChild(container3)


}

        // ADD EVENT LISTNERS TO ACTIVATE CLICK BUTTON AND REPO (ASYNC FUNCTION)
        search.addEventListener('click', repo)

// code ends here//
