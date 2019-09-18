const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () => container.classList.remove('right-panel-active')
);

function openSearch() {
	document.getElementById("searchBar").classList.toggle('active');
}

function openSideNav() {
	document.getElementById("side-nav-wrapper").classList.toggle('active');
}
