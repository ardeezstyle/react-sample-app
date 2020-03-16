<?php

if($method == 'GET') {
  if ($id) {
    $data = DB::query("SELECT * FROM $tableName WHERE id=:id", array(':id' => $id));
    if ($data != null) {
      echo json_encode($data[0]);
    } else {
      echo json_encode(['message' => 'Currently there is no customer in the database']);
    }
  } else {
    $data = DB::query("SELECT * FROM $tableName");
    if ($data != null) {
      echo json_encode($data);
    } else {
      echo json_encode(['message' => 'Currently there is no customer in the database']);
    }
  }
} else if ($method == 'POST') {
  if($_POST != null && !$id) {
    extract($_POST);
  } else {
    extract(json_decode(file_get_contents('php://input'), true));
  }
  if ($fname && $lname && $email && $phone && $dob) {
    $dt = date('Y-m-d',strtotime($dob));
    DB::query("INSERT INTO $tableName VALUES(null, :fname, :lname, :email, :phone, :dob)", array(':fname' => $fname, ':lname' => $lname, ':email' => $email, ':phone' => $phone, ':dob' => $dt));
    $data = DB::query("SELECT * FROM $tableName ORDER BY id DESC LIMIT 1");
    if ($data != null) {
      echo json_encode(['message' => 'Customer added successfully', 'success' => true, 'customer' => $data[0]]);
    }
  } else {
    echo json_encode(['message' => 'Details cannot be added', 'success' => false]);
  }
} else if ($id) {
  $data = DB::query("SELECT * FROM $tableName WHERE id=:id", array(':id' => $id));
  if($data != null) {
    if($method == 'PUT') {
      extract(json_decode(file_get_contents('php://input'), true));
      $dt = date('Y-m-d',strtotime($dob));
      DB::query("UPDATE $tableName SET fname=:fname, lname=:lname, email=:email, phone=:phone, dob=:dob WHERE id=:id", array(':fname' => $fname, ':lname' => $lname, ':email' => $email, ':phone' => $phone, ':dob' => $dt, ':id' => $id));
      $data = DB::query("SELECT * FROM $tableName WHERE id=:id", array(':id' => $id));
      echo json_encode(['message' => 'Customer updated successfully', 'success' => true, 'customer' => $data[0]]);
    } else if($method == 'DELETE') {
      $data = DB::query("DELETE FROM $tableName WHERE id=:id", array(':id' => $id));
      echo json_encode(['message' => 'Customer deleted successfully', 'success' => true]);
    }
  } else {
    echo json_encode(['message' => 'Customer does not exist', 'success' => false]);
  }
}

?>
