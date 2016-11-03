function helloWorld(){
    var x=5
    var y='rohhan'
    y=10
    console.log('obama')
}

// function handleClick(){
//     alert('you clicked on a thing')
// }

function handleClick(){
    var text=$(this).text()
    alert(text)
}

function whenPageIsReady(){
    console.log('wooooo')
}

$(document).ready(function(){
    $(".panel").click(handleClick)

})


