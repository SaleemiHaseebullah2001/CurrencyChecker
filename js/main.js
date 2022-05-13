function curCheck()
{
    let regExp = /^€((?=.*[1-9]|0)(?:\d{1,3}))((?=.*\d)(?:\.\d{3})?)*((?=.*\d)(?:\,\d\d){1}?){0,1}$/;
    let input = document.getElementById("input");
    if (regExp.test(input.value) == true) {
        document.getElementById("alert").innerHTML = "<span class='alertPlus'>Currency Pattern Matched</span>";
    }else{
        document.getElementById("alert").innerHTML = "<span class='alert'>Incorrect Currency Pattern</span>";
    }
}
