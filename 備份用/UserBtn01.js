
//編輯畫面1 關閉編輯以及取消編輯以及儲存編輯
function ChangeDisabled(value) {
    var EditInput01 = document.getElementById('EditInput01');
    var EditInput02 = document.getElementById('EditInput02');
    var EditInput03 = document.getElementById('EditInput03');
    var EditInput04 = document.getElementById('EditInput04');
    var EditInput05 = document.getElementById('EditInput05');
    if (value == '1') {
        EditInput01.disabled = false;　// 變更欄位為可用
        EditInput02.disabled = false;
        EditInput03.disabled = false;
        EditInput04.disabled = false;
        EditInput05.disabled = false;

    } else {
        if (value == '2') {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: '取消編輯',
                showConfirmButton: false,
                timer: 1500
            })
            EditInput01.disabled = true;　// 變更欄位為可用
            EditInput02.disabled = true;
            EditInput03.disabled = true;
            EditInput04.disabled = true;
            EditInput05.disabled = true;
        }
        else {
            EditInput01.disabled = true;　// 變更欄位為禁用
            EditInput02.disabled = true;
            EditInput03.disabled = true;
            EditInput04.disabled = true;
            EditInput05.disabled = true;
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: '確認修改送出',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
}

//sumbim的input按鈕
let sumbit = document.querySelector('.E1_post_btn')

//個人檔案名稱
let UserName = document.querySelector('.E1_UserName')
//密碼
let password = document.querySelector('.E1_password')
//確認密碼
let password_Con = document.querySelector('.E1_password_Con')
//國家/地區
let country = document.querySelector('.E1_country')
//關於我
let UserAbout = document.querySelector('.E1_UserAbout')

E1_submitValue()
function E1_submitValue() {
    //個人檔案名稱
    UserName.addEventListener('onchange', function () {
        var option = this.UserName
        $(`.E1_UserName`).attr("value", `${option.value}`)
        debugger
    })
    //密碼
    //確認密碼
    //國家/地區
    country.addEventListener('change', function () {
        //var option = this.options[this.selectedIndex];
        //$(`.E1_country`).attr("value", `${option.value}`)
        var Str = UserName.value
        alert(Str)
        debugger
    })
    //關於我
}
