const countSpan = document.getElementById('count').value;

console.log(countSpan);

function loginUser() {
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;

    if (userId && password) {
        alert(`Logging in with User ID: ${userId}`);
    } else {
        alert('Please enter both User ID and Password');
    }
}

function forgotPassword() {
    alert('Redirecting to Forgot Password page...');
    // Here, you would typically redirect to a forgot password page
    // window.location.href = 'forgot-password.html';
}

function registerAccount() {
    window.location.href = 'register.html';
}

function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert(`Registering user:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
}

function showGroceryItems() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>Grocery Items</h3>
        <div class="grocery-item">
            <span><img src="milk.png" alt="Milk">Milk</span>
            <button onclick="addToCart('Milk')">Add to Cart</button>
        </div>
        <div class="grocery-item">
            <span><img src="bread.png" alt="Bread">Bread</span>
            <button onclick="addToCart('Bread')">Add to Cart</button>
        </div>
        <div class="grocery-item">
            <span><img src="apples.png" alt="Apples">Apples</span>
            <button onclick="addToCart('Apples')">Add to Cart</button>
        </div>
        <div class="grocery-item">
            <span><img src="carrots.png" alt="Carrots">Carrots</span>
            <button onclick="addToCart('Carrots')">Add to Cart</button>
        </div>
        <div class="grocery-item">
            <span><img src="eggs.png" alt="Eggs">Eggs</span>
            <button onclick="addToCart('Eggs')">Add to Cart</button>
        </div>
    `;
}


function showPastOrders() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h3>Past Orders</h3>
        <div class="empty-orders">
            <p>No orders till now</p>
            <img src="sad-emoji.png" alt="Sad Emoji">
        </div>
    `;
}

function addToCart(item) {
    alert(`${item} added to cart`);
}


let currentImageIndex = 0;
const images = [
    'background1.jpg',
    'background2.jpg',
    'background3.jpg',
    'background4.jpg'
];

function changeBackgroundImage() {
    const backgroundSlider = document.getElementById('background-slider');
    backgroundSlider.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 1000);

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundImage();
});

function closeNotification() {
    document.querySelector('.notification-prompt').style.display = 'none';
}

function updateCount(value) {
    value+=1;
    console.log(value);
    //document.getElementById("counter").innerHTML = value;
}


function addToCart(item) {
    updateCount(1);

    alert(item + ' added to cart');
    
}

function removeFromCart(item) {
    alert(item + ' removed from cart');
}

