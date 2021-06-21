
$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});


  function doc(){
      document.getElementById("doc").style.display = "block";
      document.getElementById("stu").style.display = "none";
      document.getElementById("other").style.display = "none";
  }
  function stu(){
      document.getElementById("stu").style.display = "block";
      document.getElementById("doc").style.display = "none";
      document.getElementById("other").style.display = "none";
  }
  function other(){
      document.getElementById("stu").style.display = "none";
      document.getElementById("doc").style.display = "none";
      document.getElementById("other").style.display = "block";
  }
