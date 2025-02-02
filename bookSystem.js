let booksArray = [] ;
const addBookBtn = document.getElementById("addBook") ;
const books =document.getElementById("books") ;
    ;
  

    // const books = document.getElementById ("books") ;

addBookBtn.addEventListener('click',() => {

    // event.preventDefault();

  // Declaring variables, input value need to be taken in the event listner , 
    // if i take here then this will remain default and shows this only even input changes
    //  by the user, inside the event listener, code not worked outside , shifted to inside

    const bookName = document.getElementById("bookName").value ;

    const authorName = document.getElementById("authorName").value ;

    const pagesTime = document.getElementById ("pagesTime").value;

    const bookDescription = document.getElementById ("bookDescription").value; 

    // setting validation for inputs 

    if (bookName === "") {
        alert('Enter book name before adding book data');
        
        return;
    }
    if (authorName === "") {
        alert('Enter author name before adding book data');
        return;
    }
    if (pagesTime === "") {
        alert('Enter page reading time before adding book data');
        return;
    }
    if (bookDescription === "") {
        alert('Enter book description before adding book data');
        return;
    }

    //  creating objects from the inputs added in the form
    let bookObject = { bookName : bookName , authorName : authorName, pagesTime :pagesTime,
    bookDescription :bookDescription} ;

    // pushing the object in to the array

    booksArray.push(bookObject);
    
    const bookshtml = booksArray.map((x,y) => {

        return `<p>Sl No: ${y +1 } 
        Book Name : ${x.bookName } 
        Author Name: ${x.authorName} 
        Page Reading Time: ${x.pagesTime} Minutes 
        Book Description: ${x.bookDescription}</p>` ;

    })
    // Changing the innerHTML for display when clicking add button
    books.innerHTML = bookshtml.join('');

    // Clearing input values after completion of adding in Array

    document.getElementById("bookName").value  = "";

    document.getElementById("authorName").value = "";

    document.getElementById ("pagesTime").value = "";

    document.getElementById ("bookDescription").value = "";

})
