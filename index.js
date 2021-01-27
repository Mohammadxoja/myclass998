
	const btn = document.querySelector('button');   
    const img = document.querySelectorAll('img'); 
	btn.addEventListener('click', () => {
       for(let i = 0; i < img.length; i++) {
       	 img[i].classList.toggle('block'); 
       } 
	})
