<?php
  $data = '[
    {"id":"1", "name" : "sofet", "email" : "asdfwer@naver.com"},
    {"id":"2", "name" : "levi", "email" : "123123aa@google.com"},
    {"id":"3", "name" : "Excel", "email" : "qwer123@naver.com"}
  ]';
  echo $_GET["callback"]."(".$data.")";
?>