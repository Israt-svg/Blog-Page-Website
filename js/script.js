window.addEventListener('scroll', function(){

    let navbar = this.document.getElementsByClassName('nav-bar')[0];
    let pagelogo = this.document.getElementsByTagName('img')[0];

    if(window.pageYOffset >=5){
        navbar.classList.add('sticky-nav');
        pagelogo.src = "img/her_180x180.webp";
    }

    else{
        navbar.classList.remove('sticky-nav');
        pagelogo.src="img/HerPaperRoute-logo_bw180x180.webp";
    }
})