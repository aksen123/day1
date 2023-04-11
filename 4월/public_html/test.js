
$(function() {
  $.ajax({
    url:"/MOCK_DATA.json",
    dataType:"json",
    success:function(data) {
      if(data.length > 0) {
        let tb = $("<table />");
        for(i in data) {
          let $id = data[i].id;
          let $first_name = data[i].first_name;
          let $last_name = data[i].last_name;
          let $email = data[i].email;
          let $gender = data[i].gender;

          let row = $("<tr />").append(
                    $("<td />").text($id),
                    $("<td />").text($first_name),
                    $("<td />").text($last_name),
                    $("<td />").text($email),
                    $("<td />").text($gender),
          );
          tb.append(row);
        }
        $(".wrap").append(tb);
      }
    }
  })
})