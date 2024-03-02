function setInnerText(id,value){
  document.getElementById(id).innerText = value;
}


function discountPrice(){
  const couponCode = document.getElementById('coupon-field').value;
  if(couponCode === 'NEW15'){ const price = document.getElementById('grand-total-price').innerText;
  const priceNum = parseInt(price);
  const discount = priceNum * 0.15 ;
  const grandTotal = priceNum - discount ;
  setInnerText('grand-total-price',grandTotal);
  document.getElementById('label').style.display = 'none'


  setInnerText('discount-total-price',discount);
  document.getElementById('discount-container').style.display = 'flex'
 }
 else if(couponCode === 'Couple 20'){
  const price = document.getElementById('grand-total-price').innerText;
  const priceNum = parseInt(price);
  const discount = priceNum * 0.2 ;
  const grandTotal = priceNum - discount ;
  setInnerText('grand-total-price',grandTotal);
   document.getElementById('label').style.display = 'none'


   setInnerText('discount-total-price',discount);
   document.getElementById('discount-container').style.display = 'flex'
 }
 else{
  alert('Invalid Coupon Code');
 }
 
}




 document.getElementById('coupon-button').addEventListener('click',discountPrice)

 
                                                                               
                                                            

