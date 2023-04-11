//뉴스 갖고오기

// $(function() {
//   $.ajax({
//     url : "news.php",
//     dataType : "xml",
//     success : function(data) {
//       let $items = $(data).find("item");
//       if($items.length > 0) {
//         $items = $items.slice(0, 10);
//         let $ulTag = $("<ul />");
//         $.each($items, function(i, o) {
//           let $title = $(o).find("title").text();
//           let $link = $(o).find("link").text();

//           let $aTag = $("<a />")
//           .attr({"href" : $link,
//                 "target" : "_blank"})
//           .text($title)

//           let $liTag = $("<li />").append($aTag);

//           $ulTag.append($liTag);
//         })
//         $(".wrap").append($ulTag)
//       }
//     }
//   })
// }); 

// $(function() {
//   let href = "http://aksen0523.dothome.co.kr/member.php?callback=myFnc";
//   $.ajax({
//     url: href,
//     dataType : "jsonp"
//   }).done(function myFnc(data) {
//     if(data.length > 0) {
//       let $table = $("<table />");
//       data.forEach(function(o) {
//         $id = o.id;
//         $name = o.name;
//         $email = o.email;

//         let trTag = $("<tr />");
//         trTag.append(
//           $("<td />").text($id),
//           $("<td />").text($name),
//           $("<td />").text($email),
//         );

//         $table.append(trTag);
//       });

//       $(".wrap").append($table);
//     }
//   })
// })


