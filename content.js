replaceRegularTextAreaByCodeEditor = function(){
    const textarea = document.getElementsByTagName('textarea')[0];

    if (textarea && textarea.getAttribute("rows")) {       
        div = document.createElement("div")
        div.setAttribute("id", "editor");
        textarea.replaceWith(div);

        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/twilight");
        editor.getSession().setMode("ace/mode/python");

        hidden_text_area = document.createElement("textarea");
        hidden_text_area.setAttribute("name", textarea.getAttribute("name"));
        hidden_text_area.hidden = true;
        div.append(hidden_text_area);

        editor.on('change', function() {           
            hidden_text_area.innerHTML = editor.getValue();
        })
    }
}

document.addEventListener('DOMNodeInserted', replaceRegularTextAreaByCodeEditor, false);