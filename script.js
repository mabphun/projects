var myProjects = [
    {
        name: "Kvízek",
        link: "quizzes"
    }
];

//console.log(myProjects[1].name)

var projectContainer = document.getElementById('projects');

showProjects(myProjects,projectContainer);

function showProjects(projects, projectContainer){
    // we'll need a place to store the output and the answer choices
    var output = [];
    
    for(var i=0; i<projects.length; i++){

        // add this question and its answers to the output
        output.push(
            '<a href="https://x6parancsnok.github.io/' + projects[i].link + '">• ' + projects[i].name + '</a> </br>' 
        );
    }
    // finally combine our output list into one string of html and put it on the page
    projectContainer.innerHTML = output.join('');
    
}