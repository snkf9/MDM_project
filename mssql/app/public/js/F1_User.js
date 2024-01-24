///Hàm thêm hàng tại bảng user
function fn_addUser() {
    var table = $('#user_table').DataTable();

    var name = document.getElementById('addName').value;
    var id_name = document.getElementById('id_svn').value;
    var dept = document.getElementById('dept').value;
    var fac = document.getElementById('factory1').value;
    var level = document.getElementById('level').value;    
    var passw = document.getElementById('pass').textContent;
    table.row.add( [
            name,
            id_name,
            dept,
            fac,
            level
            // '<button type="button" class="btn green btn-xs select-row" data-id="7" data-includeTax="N">btn</button>'

     ] ).draw();
     

}
//Hàm chức năng chuyển trang
function fn_ScreenChange(scr_1, scr_2)
{
    document.getElementById(scr_1).style.visibility = 'visible';   // Hiển thị trang được chọn
    document.getElementById(scr_2).style.visibility = 'hidden';    // Ẩn trang 1

}

function fn_addTool() {
    var table = $('#tool_table').DataTable();

    var name = document.getElementById('toolName').value;
    var id_name = document.getElementById('tooltype').value;

    table.row.add( [
            name,
            id_name,
            'N/A',
            'N/A',
            'N/A'

            

     ] ).draw();

}
