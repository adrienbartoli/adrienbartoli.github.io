

var myxmlfilename = "my.xml"; 



document.body.style.backgroundColor = "blue";
document.body.innerHTML = "Read an xml file"; 
document.body.style.color = "white";

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0) 
            { 
                var allText = rawFile.responseText; 
                
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(allText,"text/xml");

                document.body.innerHTML = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue; 
                

            } 
        } 
    } 
    rawFile.send(null); 
} 

readTextFile(myxmlfilename)


