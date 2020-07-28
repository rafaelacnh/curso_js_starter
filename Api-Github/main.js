var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/rafaelacnh')
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
    if(xhr.readyState === 200){
    console.log(JSON.parse(xhr.responseText));
    }
}
}