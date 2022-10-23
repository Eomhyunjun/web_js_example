window.onload = init;

function init() {
    for (var i = 0; i < localStorage.length; i++)
    {
        var key = localStorage.key(i);
        if (key.substring(0, 6) == "sticky")
        {
            var value = localStorage.getItem(key);
            addStickyToDOM(value);
        }
    }
}

function addStickyToDOM(value)
{
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement('li');
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}
