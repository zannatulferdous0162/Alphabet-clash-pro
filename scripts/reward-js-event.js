
document.getElementById('email').addEventListener('click',function(){
  console.log('click');
});


document.getElementById('email').addEventListener('change', function(e){
  console.log('change',e.target.value);
});
document.getElementById('email').addEventListener('input', function(e){
  console.log('input',e.target.value);
});
document.getElementById('designation').addEventListener('change', function(e){
  console.log('change',e.target.value);
});
document.getElementById('repeat-password').addEventListener('blur', function(e){
  console.log('blur',e.target.value);
});
document.getElementById('repeat-password').addEventListener('focus', function(e){
  console.log('focus',e.target.value);
});


document.getElementById('repeat-password').addEventListener('focus', function(e){
  console.log('focus',e.target.style.background = "blue");
});


document.getElementById('repeat-password').addEventListener('blur', function(e){
      console.log('blur',e.target.style.background = "transparent"); //'';
    });

    // window.addEventListener('load', function(){
    //     console.log('window loading............');
    //     this.alert('please wait.....')
    // })