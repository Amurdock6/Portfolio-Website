//preloader
window.addEventListener('load', () => {
		const preload = document.querySelector('.preload');
		setTimeout( function() {
            preload.classList.add('preload-finish');
        }, 3000 );
});
