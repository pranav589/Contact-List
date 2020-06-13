//get refrence to input
let filterInput = document.getElementById('filterInput');

//add event listener
filterInput.addEventListener('keyup', filterName);

function filterName() {
  //get the input value
  let filterValue = filterInput.value.toUpperCase();

  //get reference to ul(names)
  let ul = document.getElementById('names')

  //get reference to li(collection-items)
  let li = document.querySelectorAll('li.collection-item');

  //loop through collection items 
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

}