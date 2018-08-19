console.log('are we connected')

  $('.readmore').click(function() {
    event.preventDefault()
    $('#show-this-on-click').slideDown()
    //$('#show-this-on-click').show()

    // $('.readmore').click('show me')
    $('.readless').show()
    $('.readmore').hide()
    //change the nme of the button
    // $('button').text('show me!')
  })

  $('.readless').click(function(){
    event.preventDefault()
    $('#show-this-on-click').slideUp()
    $('.readless').hide()
    $('.readmore').show()
  })


  $('.readmore a').click(function() {
    // event.preventDefault()
    // you can write here
  })

  $('.readless a').click(function() {
    // event.preventDefault()
    // you can write here
  })

  $('.learnmore').click(function(){
  $('#learnmoretext').show()
})
$('.learnmore').click(function() {
  // event.preventDefault()
  // you can write here
})
