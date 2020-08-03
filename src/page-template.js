// functions to generate each section for the team cards

const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class='card employee'>
            <div class='card-header'>
                <h2 class='card-title'>${manager.getName()}</h2>
                <h3 class='card-title'><i class="fab fa-black-tie mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class='card-body'>
                <ul class='list-group'>
                    <li class='list-group-item'>ID: ${manager.getId()}</li>
                    <li class='list-group-item'>Email: ${manager.getEmail()}</li>
                    <li class='list-group-item'>Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    const GenerateEngineer = engineer => {
        return `
        <div class='card employee'>
            <div class='card-header'>
                <h2 class='card-title'>${engineer.getName()}</h2>
                <h3 class='card-title'><i class="fas fa-cog mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class='card-body'>
                <ul class='list-group'>
                    <li class='list-group-item'>ID: ${engineer.getId()}</li>
                    <li class='list-group-item'>Email: ${manager.getEmail()}</li>
                    <li class='list-group-item'>GitHub: <a href='https://github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `;
    }
    const generateIntern = intern => {
        return `
        <div class='card employee'>
            <div class='card-header'>
                <h2 class='card-title'>${intern.getName()}</h2>
                <h3 class='card-title'><i class="fas fa-graduation-cap mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class='card-body'>
                <ul class='list-group'>
                    <li class='list-group-item'>ID: ${intern.getId()}</li>
                    <li class='list-group-item'>Email: ${manager.getEmail()}</li>
                    <li class='list-group-item'>School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === 'Manager')
        .map(manager => generateManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join('')
        );
    html.push(team
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => generateIntern(intern))
        .join('')
        );

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel='stylesheet' href="./style.css">
    <script src="https://kit.fontawesome.com/76cce9ad4d.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-12 jumbotron mb-3 my-team'>
                <h1 class='text-center'> My Team </h1>
            </div>
        </div>
    </div>
    <div class='container'>
        <div class='row'>
            <div class='team-info col-12 d-flex justify-content-center'>
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" 
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" 
        crossorigin="anonymous"></script>
</body>
</html>
    `
}