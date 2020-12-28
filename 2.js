
     var input=prompt('Please Name your Drawing Before you continuing');
      
	function downloadCanvas(){  
    // get canvas data  
    var image = canvas.toDataURL();  
  var name = input+"-"+"KidsDrawings by Fire Lions";
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 
  name+'.png'; // set the name of the download file 
    tmpLink.href = image;  
  
    // temporarily add link to body and initiate the download  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}
	var title = input+"-"+"KidsDrawinsg"
document.title = title;
  document.getElementById("proName").innerHTML = "Project : "+input;
function sGd() { 
            var img = document.createElement('img'); 
            img.src =  image; 
            document.getElementById('body').appendChild(img); 
            down.innerHTML = "Image Element Added.";  
        }  




        