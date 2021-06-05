//accordion
//set some acction befor anything else
//define how accordion will be open: by clicking, hovering, or ...
var action = "click";
var speed = "500";

$(document).ready(function() {
    //action is variable defined in line 4
    $('li.q').on(action, function() {
        //this refer to question in any list which I select in prev line
        //.next is selecting anything after every question in any list, which here is targetting answers (li.a)
        $(this).next()
            //slideToggle for making answers slideUp and SlideDown with the speed defined in line 5
            .slideToggle(speed)
            .siblings('li.a')
            .slideUp()
            //to make the image of arrow rotate when choosing questions
            //this refer to the same selector of this event handller which in this case is 'li.q'
        var img = $(this).children('img');
        //remove the rotate class from all image except the one I clicked on it
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate');
    });
});