function registrer () {
  let ut = "<li>"
  ut += "<input type='checkbox'>"
  ut += "<span>" + $("#input").val() + "</span>"
  ut += "</li>"

  $("#gjoremal").prepend(ut);
}
