document.querySelector('button').addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue';
});
document.querySelector('button').addEventListener('click', function() {
  alert('Thank you for choosing to order online!');
});
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', function() {
    
  });
});
document.getElementById('orderForm').addEventListener('submit', function(event) { 
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;

  alert(`Order Details:\nName: ${name}\nContact: ${contact}\nItem: ${item}\nQuantity: ${quantity}`);
 
  
});
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('orderOnlineBtn').addEventListener('click', function() {
    window.location.href = 'orderonline.html';
  });

  document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
  
  });
});