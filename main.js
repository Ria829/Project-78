var name1=["Cover page", "My Father" , "My Mother" , "Myself" , "My Grandfather" , "My Grandmother" , "My Whole Family"];
var images=["familybook.png" , "https://i.pinimg.com/236x/4d/99/8d/4d998d4ffe69fdb5ab013fe0320d9df0.jpg" , "https://i.pinimg.com/474x/6e/97/57/6e97576fb57b6150984bc4bee864013c.jpg" , "https://i.pinimg.com/170x/f2/34/52/f234527ad4673372a54d454b67db154d.jpg" , "https://graphicriver.img.customer.envatousercontent.com/files/301807601/preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=18fc17bb213c0ed7d66d4271ee4245b9r.jpg" , "https://lh3.googleusercontent.com/proxy/SPP1GKaZb5yGNjzmxknfCZNdaOzv_jLrIO4biZVw8Vvsbj-ORdsr74NXopqATwU6H7QmqWoqc6xEBic8FfiB7IQn" , "https://image.freepik.com/free-vector/happy-cute-kid-girl-with-mom-dad_97632-1905.jpg"];
var i=0;
function nextslide() {
document.getElementById("next_name").innerHTML=name1[i];
document.getElementById("image1").src=images[i];
i++;
}