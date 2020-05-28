<?php 
    include('database.php');

    if(isset($_POST['name_job'])) {
        $name_job = $_POST['name_job'];
        $name_service = $_POST['name_service'];
        $phone = $_POST['phone'];

        $query = "INSERT INTO register(name_job, name_service, phone) VALUES('$name_job', '$name_service', '$phone')";
        $result = mysqli_query($db, $query);
        if(!$result) {
            die('Query Failed.');
        }
        echo 'Register Added Successfully';
    }
?>