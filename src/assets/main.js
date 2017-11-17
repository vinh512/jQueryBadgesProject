$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2856334.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {
    
    var $badges = $('#badges');
    
    courses.forEach(function(course) {
      // creates a div with the class course and appends it to the element with id badges
      var $course = $('<div/>', { 'class' : 'course' }).appendTo($badges);
      
      // creates an h3 tag with the text contents of the course title and appends them to each of the course divs
      $('<h3/>', { text: course.title }).appendTo($course);
      
      $('<img/>', { src: course.badge }).appendTo($course); 
      
      $('<a/>', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($course);
           
    })
  }

});
