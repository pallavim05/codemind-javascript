console.log("===========getElementById() Dom api==========");
const reactElement = document.getElementById("react");
        console.log(reactElement);
        console.log(reactElement.innerText);

        console.log("========querySelector() dom api using element name ======");
        const h2Element = document.querySelector("h2");
        console.log(h2Element.innerText);

        console.log("========querySelector() dom api using element id ======");
        const javaElement = document.querySelector("#java");
        console.log(javaElement.innerText);

        console.log("========querySelector() dom api using element class ======");
        const toolsElement = document.querySelector(".tool");
        console.log(toolsElement.innerText);

        console.log("========querySelectorAll() dom api using element class ======");
        const toolElement = document.querySelectorAll(".tool");
        for (const element of toolElement) {
            console.log(element.innerText);
            
        }

        console.log("====== update element id =======");
        const toolsHeading = document.querySelector("#toolsHeading");
        toolsHeading.innerText = "Tools and IDE's";

        console.log("====== changing the attribute of an element =======");
        const instagramPage = document.querySelector("#instagramPage");
    instagramPage.setAttribute("href", "https://www.codemindtechnology.com/");

    console.log("====== changing the style of an element =======");
    const socialMediaElement = document.querySelector("#socialMediaElement");
    socialMediaElement.style.color = "orange";
    socialMediaElement.style.fontFamily = "Arial";

    console.log("====== create a node ======");
    const textNode = document.createTextNode("All copyrights reversed by codemind");
    const paraElement = document.createElement("p");
    paraElement.appendChild(textNode);
    const footer = document.querySelector("footer");
    footer.appendChild(paraElement);

    console.log("====== Delete a node ======");
    const liElement = document.querySelector("#dance");
    const hobbiesElement = document.querySelector("#hobbies");
    hobbiesElement.removeChild(liElement);

    console.log("=== Events ===");
    const hobbiesHeadingElement = document.querySelector("#hobbiesHeading");
    hobbiesHeadingElement.addEventListener("click",()=>{
        console.log("Hey Buddy...Smile!!");
        
    })
    const submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener("click",()=>{
        const varNum = prompt("Enter the number",1);
        confirm("Are you sure get square!")
        alert(varNum*varNum);
    })

    
    
    
    

        
        
        

        