
function sendMessage() {
    let text = document.querySelector(".textarea").value;
    let response = $.get("https://ironlinks.ru/nordic/group12/chat/save.php?text=" + text);
    console.log(response.responseText)  
    getMessage();
    document.querySelector(".textarea").value="";
}
function getMessage() {
    let response = $.get("https://ironlinks.ru/nordic/group12/chat/get.php");
    console.log(response.responseText)  
    let data = JSON.parse(response.responseText)
    let result = data.result;
    document.querySelector(".messages").innerHTML = '';

    for (let i = 0; i < result.length; i++ ) {
        document.querySelector(".messages").innerHTML +=`
        <div>        
        <div class="message">
        ${result[i].text}
        </div>
        </div>
        `;
    }
}