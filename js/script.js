const allSeats = document.getElementsByClassName("seat-btn");
let selectedSeats = 0;
let leftSeats = 40;
const selectArr =[];
let total = 0;
let count = 0;
document.getElementById('coupon-button').setAttribute('disabled',true)
document.getElementById('next-btn').setAttribute('disabled',true);






for(const seat of allSeats){
  const element = seat.innerText ;

 
  seat.addEventListener('click',function(event){
    if (selectArr.includes(element) === false){
      selectArr.push(element);
    
      count = count + 1 ;

       document.getElementById('phone').addEventListener('keyup',function(){
          const phone = document.getElementById('phone').value
        const phoneStr = phone.toString().length;
        
        if(phoneStr < 11){
          document.getElementById('next-btn').setAttribute('disabled',true);
        }
        else{ document.getElementById('next-btn').removeAttribute("disabled")};
        })
   

     if(count <= 4){
        // event.target.classList.add("bg-green-500");
        event.target.style.backgroundColor = '#1DD100'
        selectedSeats = selectedSeats + 1 ;
       setInnerText('selected-seats',selectedSeats);
    
       leftSeats = leftSeats - 1 ;
    setInnerText('seats-left',leftSeats);

  

  
const tBody = document.getElementById('t-body');
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
td1.innerText = element;
td2.innerText = "Economics";
td3.innerText = 550;

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);

tBody.appendChild(tr)

total = total + 550 ;
const totalPrice = document.getElementById('total-price');
totalPrice.innerText = total; 

const grandTotal = document.getElementById('grand-total-price');
grandTotal.innerText = total;




 

      }
     else{ alert('You can get maximum 4 Tickets')
    }
   
   
    const couponButton = document.getElementById("coupon-button");

if(count < 4){
  couponButton.setAttribute('disabled',true);

  }
  
  else{
    couponButton.removeAttribute('disabled')
  }

    

    }

})


      }

    
   
     
    

     
    


  





 
 

