$('input.chkAll').on('click',function(){
    event.stopPropagation();
    $('#panelsStayOpen-collapseOne').addClass('show');
  })
  
  // check all checkbox
  
  // 
  $('.accordion-button').on('click',function(){
    console.log(event.target)
      console.log(event.currentTarget)
    event.preventDefault()
      event.stopPropagation();
    if(event.target.classList.contains('chkAll')){
      
    }
  })
  
    var accordion = $('#accordion1btn')
  accordion.addEventListener('show.bs.collapse',function(){
    console.log('in this listen')
  })