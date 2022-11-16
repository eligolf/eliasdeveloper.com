window.onscroll=function(e){checkHeaderState()},window.onload=function(e){checkHeaderState()},document.querySelector("#my-header").innerHTML=`
<header>
	<div class="header-bar">
		<a class="header-logo" href="/">
			<img src="assets/images/only-logo-light-blue.png" alt="Elias Nilsson">
		</a>
		<div class="desktop-navigation" id="desktop-navigation">		
			<a class="desktop-navlist-item" href="/#portfolio" aria-label="See portfolio">Portfolio</a>
			<a class="desktop-navlist-item" href="/#about" aria-label="See about me">About me</a>				
			<a class="desktop-navlist-item" href="/#services" aria-label="See services">Services</a>			
			<a class="primary-button ls-25" href="/#contact" aria-label="Contact me">Contact</a>		
		</div>	
		<div class="nav-burger-toggle">
			<span class="nav-burger-top"></span>
			<span class="nav-burger-middle"></span>
			<span class="nav-burger-bottom"></span>
			<span class="visually-hidden">Meny</span>
		</div>
	</div>
	<div class="mobile-navigation" id="mobile-navigation">
		<div class="mobile-nav-middle">
			<ul class="mobile-nav-list ls-10">				
				<li><a class="mobile-navlist-item" href="/#portfolio" aria-label="See portfolio">Portfolio</a></li>	
				<li><a class="mobile-navlist-item" href="/#about" aria-label="See about me">About me</a></li>				
				<li><a class="mobile-navlist-item" href="/#services" aria-label="See services">Services</a></li>		
			</ul>	
			<div class="mobile-nav-contact-button ls-25 mobile-navlist-item"><a href="/#contact" class="primary-button" aria-label="Contact me">Contact me!</a></div>			
		</div>
		<div class="mobile-nav-bottom">
			<div class="mobile-nav-social ls-25">
				<a href="https://www.facebook.com/eliasdevelopercom" target="_blank" aria-label="Visit my Facebook page"><i class="fa-brands fa-facebook-f"></i></a>
				<a href="https://www.linkedin.com/in/elias-nilsson/" target="_blank" aria-label="Visit my LinkedIn page"><i class="fa-brands fa-linkedin-in"></i></a>
				<a href="https://github.com/eligolf" target="_blank" aria-label="Visit my GitHub page"><i class="fa-brands fa-github"></i></a>
			</div>
		</div>
	</div>		
</header>
`;const navToggle=document.querySelector(".nav-burger-toggle"),mobileNav=document.querySelector(".mobile-navigation");navToggle.addEventListener("click",()=>{navToggle.toggleAttribute("menu-open",!mobileNav.hasAttribute("data-visible")),mobileNav.toggleAttribute("data-visible"),mobileNav.hasAttribute("data-visible")?navToggle.style.background="none":navToggle.style.background="var(--color-sticky-header)"});let navItemArray=document.querySelectorAll(".mobile-navlist-item");navItemArray.forEach(function(e){e.addEventListener("click",function(){navToggle.toggleAttribute("menu-open",!mobileNav.hasAttribute("data-visible")),mobileNav.toggleAttribute("data-visible")})}),window.onresize=function(){mobileNav.removeAttribute("data-visible"),navToggle.removeAttribute("menu-open")};const headerBar=document.querySelector(".header-bar"),headerLogo=document.querySelector(".header-logo");function checkHeaderState(){window.scrollY>10?mobileNav.hasAttribute("data-visible")?(headerBar.style.background="none",headerBar.style.marginTop="1em"):(headerBar.style.background="var(--color-sticky-header)",headerBar.style.marginTop="0em"):(headerBar.style.background="none",headerBar.style.marginTop="1em")}var currentYear=new Date().getFullYear();document.querySelector("#my-footer").innerHTML=`
<footer>
    <a class="footer-logo" href="/">
        <img src="assets/images/only-logo-light-blue.png" alt="Elias Nilsson">
    </a>
    <div class="copyright-statement ls-10">
        \xa9 ${currentYear} Elias Nilsson
    </div>
    <div>
        <div class="mobile-nav-social ls-25">
            <a href="https://www.facebook.com/eliasdevelopercom" target="_blank" aria-label="Visit my Facebook page"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/elias-nilsson/" target="_blank" aria-label="Visit my LinkedIn page"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/eligolf" target="_blank" aria-label="Visit my GitHub page"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
</footer>
`,document.querySelector("#my-portfolio").innerHTML=`
    <div class='content-wrapper'>
        <div class="content-card portfolio-card-holder">
            <h2 class="title-text title-text-color-4 title-text-animation">Portfolio.</h2>
            <p class="normal-text">Below is a selection of projects I have worked on besides this website. Feel free to <a href="#contact">send me a message</a> if you want to know more.</p>
            <br>
            <div class='my-grid'>
                <div id="portfoliocard1" class="portfolio-card portfolio-card-bg-auktionera">
                    <div class="card-top-row">
                        <h3 class="card-title">Auktionera</h3>
                        <div>
                            <a class="card-icon" href="https://auktionera.ax/" target="_blank" aria-label="Visit Auktionera website"><i class="fa-solid fa-globe"></i></a>
                            <a class="card-icon" href="https://facebook.com/auktionera" target="_blank" aria-label="Visit Auktionera Facebook page"><i class="fa-brands fa-facebook"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">I developed the website for Auktionera which is a circular market site for the \xc5land Islands where individuals and companies can buy and sell products through fixed price- or bidding listings.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>: </b> Website development, management and maintenance.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> WordPress, HTML, PHP, JavaScript, SQL.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> High.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard2" class="portfolio-card portfolio-card-bg-eir">
                    <div class="card-top-row">
                        <h3 class="card-title">Eir Music</h3>
                        <div>
                            <a class="card-icon" href="https://www.facebook.com/eirmusicgroup" target="_blank" aria-label="Visit Eir Music Facebook page"><i class="fa-brands fa-facebook"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Eir Music is a music production company based in Sweden. I developed their website in WordPress which had some basic functionality such as a blog, audio showcase, and customer reviews.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Website development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> WordPress, HTML, PHP.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> Low.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard3" class="portfolio-card portfolio-card-bg-endamat">
                    <div class="card-top-row">
                        <h3 class="card-title">Endamat Chess</h3>
                        <div>
                            <a class="card-icon" href="https://github.com/eligolf/Endamat-Chess" target="_blank" aria-label="Visit GitHub repository for Endamat Chess"><i class="fa-brands fa-github"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Endamat Chess is a bitboard chess engine I wrote from scratch in Python. I also developed a user interface so that people easily can play against the engine with various settings. The code is open source on GitHub.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Software development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> Python, PyGame, Chess.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> High.</p></li>
                    </ul>
                </div>
                <div id="portfoliocard4" class="portfolio-card portfolio-card-bg-snake3d">
                    <div class="card-top-row">
                        <h3 class="card-title">Snake 3D - Space Adventure</h3>
                        <div>
                            <a class="card-icon" href="https://play.google.com/store/apps/details?id=com.SlimHippoGames.Snake3D&hl=en_US&gl=US" target="_blank" aria-label="Visit Snake 3D Google Play Store page"><i class="fa-brands fa-google-play"></i></a>                            
                        </div>
                    </div>
                    <p class="normal-text">Snake 3D - Space Adventure is a free mobile game I created in Unity and programmed in C#. Some 3D models were made in Blender and the animations were programmed in Unity.</p>
                    <ul>
                        <li><p class="normal-text"><u><b>Service</u>:</b>  Software development.</p></li>
                        <li><p class="normal-text"><u><b>Skills</u>: </b> C#, Unity, Blender.</p></li>
                        <li><p class="normal-text"><u><b>Complexity</u>: </b> Medium.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`,document.querySelector("#my-about").innerHTML=`
<div class='content-wrapper'>
    <div class="content-card about-card-holder">
        <div class='row'>
            <div class='column-70'>
                <h2 class="title-text title-text-color-1 title-text-animation">About me.</h2>
                <p class="normal-text">Ever since I made my first Tic-Tac-Toe game in Python I have been fascinated by the emotions a few characters in a text editor can create for the user. Since then programming has developed into a serious passion for creating intuitive, modern, and interactive user experiences on the web.</p>
                <br>
                <p class="normal-text">I am from Sweden and currently work remotely as a freelance developer with clients ranging from individuals to medium sized companies. If you have a request or a question, don't hesitate to <a href="#contact">contact me</a>.</p>
            </div>
            <div class='column-70'>
                <img class="avatar-image" src="assets/images/elias-avatar-transparent.png" alt="Elias">
            </div>
        </div>
    </div>
</div>
`,document.querySelector("#my-services").innerHTML=`
<div class='content-wrapper'>
    <div class="content-card services-card-holder">
        <h2 class="title-text title-text-color-4 title-text-animation">Services.</h2>
        <p class="normal-text">Below you find the services I currently offer to my clients. I suggest you <a href="#contact">message me</a> with more information about your needs to get a personal offer.</p>
        <br>
        <div class='my-grid'>
            <div id="servicescard1" class="services-card">
                <h3 class="services-card-title">WordPress Website.</h3>
                <p class="normal-text">You get a modern WordPress site for your needs which is easy to maintain and update with content. </p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> More generic blogs or e-commerce sites.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> Low to medium.</p></li>
                    <li><p class="normal-text"><u><b>Time to market</u>: </b> Short.</p></li>
                    <li><p class="normal-text"><u><b>Maintainability</u>: </b> Easy.</p></li>
                </ul>
            </div>
            <div id="servicescard2" class="services-card">
                <h3 class="services-card-title">Custom Website.</h3>
                <p class="normal-text">I create a completely custom and unique website from scratch which makes you stand out in the crowded internet marketplace.</p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> Brands that want to stand out from the crowd.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> High.</p></li>
                    <li><p class="normal-text"><u><b>Time to market</u>: </b> Medium to long.</p></li>
                    <li><p class="normal-text"><u><b>Maintainability</u>: </b> Difficult.</p></li>
                </ul>
            </div>  
            <div id="servicescard3" class="services-card">
                <h3 class="services-card-title">Management and Maintenance.</h3>
                <p class="normal-text">I manage and maintain your website to a fixed monthly price so you don't have to worry about downtime, updates or compability issues. This includes e.g. hosting, updating softwares/plugins and support.</p>
                <ul>
                    <li><p class="normal-text"><u><b>Suitable for</u>: </b> Everyone.</p></li>
                    <li><p class="normal-text"><u><b>Cost</u>: </b> Low.</p></li>
                </ul>
            </div> 
            <div id="servicescard4" class="services-card">
                <h3 class="services-card-title">Software Development.</h3>
                <p class="normal-text">I create applications, tools and other software related products, mainly for smaller companies. <a href="#contact">Let me know what you need</a> and I will get back to you with more information. </p>
            </div>                
        </div>
    </div>
</div>
`,document.querySelector("#my-contact").innerHTML=`
<div class="content-wrapper">
    <div class="content-card contact-card-holder">        
        <h2 class="title-text title-text-color-2 title-text-animation">Contact me.</h2>
        <p class="normal-text">Whether you are looking for a new website or just want to say hi, I'd love to hear from you!</p>
        <div class="fs-contact-info contact-options-wrapper">
            <div class="ls-10 ff-body fw-regular"><a href="mailto:eliasjgnilsson@gmail.com" aria-label="Email me"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;eliasjgnilsson@gmail.com</a></div>
        </div>              
    </div>
</div>       

`;