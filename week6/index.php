<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="style.css">
    <script src="func.js"></script>
</head>
<body>
    <div class="container"> 
         <div class="select_opt">
                <button onclick="stdForm()">นักเรียน</button>
                <button onclick="teaForm()">ครู</button>
                <button onclick="regForm()">สมัครสมาชิก</button>
         </div>
         <div class ="form-1 unhide" id="stdForm">
            <form action="auth.php" method="get">
                <p> ฟอร์มลงชื่อเข้าใช้ของนักเรียน </p>
                <input type="text" name="username" placeholder="ชื่อผู้ใช้นักเรียน" id="">
                <br>
                <input type="password" name="password" placeholder="รหัสผ่าน" id="">
                <br>
                <input type="submit" value="ลงชื่อเข้าใช้" >
            </form>
         </div>
         <br>
         <div class ="form-2 hide" id="teaForm">
            <form action="auth.php" method="get">
                <p> ฟอร์มลงชื่อเข้าใช้ของครู</p>
                <input type="text" name="username" placeholder="ชื่อผู้ใช้ครู" id="">
                <br>
                <input type="password" name="password" placeholder="รหัสผ่าน" id="">
                <br>
                <input type="submit" value="ลงชื่อเข้าใช้" >
            </form>
         </div>
         <br>
         <div class ="form-3 hide" id="regForm">
            <form action="signup.php" method="get">
                <p> ฟอร์มสมัครสมาชิก</p>
                <input type="text" name="fullname" placeholder="ชื่อ-นามสกุล"id="">
                <br>
                <input type="radio" name="gender" value="ชาย">ชาย
                <input type="radio" name="gender" value="หญิง">หญิง
                <br>
                <input type="number" name="age" min="1" max="100" placeholder="อายุ">
                <br>
                <input type="text" name="username" placeholder="ชื่อผู้ใช้">
                <br>               
                <input type="password" name="password" id="" placeholder="รหัสผ่าน">
                <br>    
                <input type="password" name="re_password" placeholder="ยืนยันรหัสผ่าน">
                <br>
                <input type="submit" value="ลงชื่อเข้าใช้" >
            </form>
         </div>
    </div>
</body>
</html>