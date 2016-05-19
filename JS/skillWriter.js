var javaDesc = ["Completed multiple side projects",
                "Authored and participated in multiple programming contests",
               "Implemented algorithms to optimize memory allocation and run-time",
               "Two highschool classes completed with 95+%"];
var cPlusPlusDesc = ["Learned through online documentation",
              "Participated in multiple programming contests",
              "Implemented algorithms to optimize memory allocation and run-time"];
var cDesc = ["Participated in multiple programming contests",
             "Implemented algorithms to optimize memory allocation and run-time",
             "Currently enrolled in a university course"];
var schemeDesc = ["87% in university programming course"];
var AndroidDesc = ["Learned through online documentation",
                  "Programmed GradeBook application"];
var XmlDesc = ["Learned through online documentation",
              "Styled GradeBook application"];
var HTMLDesc = ["Learned through online documentation",
               "Created personal website"];
var CssDesc = ["Learned through online documentation",
              "Utilized for styling my personal website"];
var bootstrapDesc = ["Learned through online documentation",
                "Assisted with the styling of my personal website"];

function populateList(divId, desc) {
    var d = document.getElementById(divId);
    var list = document.createElement("ul");
    for (var i = 0; i < desc.length; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(desc[i]));
        list.appendChild(entry);
    }
    d.appendChild(list);
    
}

function unWriteDescription(divId) {
    var d = document.getElementById(divId);
    while (d.firstChild) {
        d.removeChild(d.firstChild);
    }
}

function writeDescription(divId) {
    switch (divId) {
        case 'java':
            populateList(divId, javaDesc);
            break;
        case 'c++':
            populateList(divId, cPlusPlusDesc);
            break;
        case 'c':
            populateList(divId, cDesc);
            break;
        case 'scheme':
            populateList(divId, schemeDesc);
            break;
        case 'android':
            populateList(divId, AndroidDesc);
            break;
        case 'xml':
            populateList(divId, XmlDesc);
            break;
        case 'html':
            populateList(divId, HTMLDesc);
            break;
        case 'css':
            populateList(divId, CssDesc);
            break;
        case 'bootstrap':
            populateList(divId, bootstrapDesc);
            break;
    }
}

function clickButton(id, divId) {
    var d = document.getElementById(id);
    if(d.className.indexOf(" active") === -1){
        d.className += " active";
        writeDescription(divId);
    } else {
        d.className = d.className.substring(0, d.className.indexOf(" active"));
        unWriteDescription(divId);
    }
}