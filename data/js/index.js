// button filter
$(document).ready(function() {
  $('#filterOptions a').click(function(e) {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');
    // reset the active class on all the buttons
    $('#filterOptions a').removeClass('active');
    // update the active state on our clicked button
    $(this).addClass('active');
    $(this).attr("disabled", true);
    if(ourClass == 'all') {
      // show all our items
      $('#ourHolder').children().children('a.list-group-item').fadeIn(500);
      $('#filterOptions a').attr("disabled", false);
    }
    else {
      // hide all elements that don't share ourClass
      $('#ourHolder').children().children('a:not(.' + ourClass + ')').hide();
      $('#filterOptions a').attr("disabled", false);
      $(this).attr("disabled", true);
      // show all elements that do share ourClass
      $('#ourHolder').children().children('a.' + ourClass).show();
    }
    return false;
  });
});


// live search filter
$(document).ready(function(){
  $("#filter").keyup(function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    // Loop through the comment list
    $(".list-group a").each(function(){
      // If the list item does not contain the text phrase fade it out
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
        // Show the list item if the phrase matches and increase the count by 1
      } else {
        $(this).show();
          count++;
      }
    });
    if($("#filter").val() == ""){
      $("#filter-count").hide();
    }
    else{
      $("#filter-count").show();
      $("#filter-count").text("Number of results " + count);
    }
  });
});

$(document).ready(function(){
  $("#filterPersonal").keyup(function(){
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(), count = 0;
    // Loop through the comment list
    $(".personalInfo div").each(function(){
      // If the list item does not contain the text phrase fade it out
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
        // Show the list item if the phrase matches and increase the count by 1
      } else {
        $(this).show();
          count++;
      }
    });
    if($("#filterPersonal").val() == ""){
      $("#filter-count").hide();
    }
    else{
      $("#filterPersonal").show();
      $("#filter-count").text("Number of results " + count);
    }
  });
});

