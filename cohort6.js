$('button#sf').click(function(){

$('div#stuff').toggle();}
);
$('button#sd').click(function(){
$('div#student').toggle();
});


$('p#ha').click(function(){

$('div#stupic').toggle();}
);



var items = ['Have the courage to live a life true to yourself, not the life others expect of you.' , 'Never attribute to malice that which can be adequately explained by stupidity.', 'Don’t make decisions when you’re angry. Don’t make promises when you’re happy.' , "Only pack what you can carry yourself." , 'Remember you’ll always regret what you didn’t do rather than what you did.', 'If you blame it on someone else, don’t expect it to get better.' ,  'If the grass is greener on the other side, there’s probably more manure there.' , ' Don’t give up what you want most for what you want now.' , 'With regards to the opposite sex: If you look hungry, you’ll starve.' , 'Strive to be the man you want your daughter to marry.' ,  'Never forget your car keys will change your car from one tonne of inert metal into one of the most deadly killing machines that has been invented.' , 'Wait 24 hours before getting mad and reacting about anything. If it doesn’t bother you in 24 hours time, it probably isn’t important enough to get mad over.' , 'Never make someone a priority who only makes you an option.', 'Try not to take anything personally. No one thinks about you as much as you do.', 'Figure out what you love to do, and then figure out how to get someone to pay you to do it.' , 'If you treat a woman like a queen, and she treats you like a jester, your princess is in another castle.'
 , 'Whenever something happens that makes you sad, ask yourself whether you’d still care about it when you’re ninety.' , 'Be persistent. When knowledge and ability aren’t enough, be persistent.' , 'Smart girls like to hear they’re pretty, pretty girls like to hear that they’re smart.' , 'Happiness is a choice and everything else is a matter of perspective.'];
$('li.a').click(function(){

alert(items[Math.floor(Math.random()*items.length)]);
     
});

$('img.img').click(function(){

 alert(items[Math.floor(Math.random()*items.length)]);

});



$('#l1').click(function(){

$('#images').show();
$('#Videos').hide();
$('#photos').hide();

}
);
$('#l2').click(function(){

$('#images').hide();
$('#Videos').show();
$('#photos').hide();
}
);

$('#l3').click(function(){

$('#images').hide();
$('#Videos').hide();
$('#photos').show();
}
);




$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });
});

