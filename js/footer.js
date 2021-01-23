   (function() {

       var body = document.getElementById('body');
       var footer = document.createElement('footer');
       body.appendChild(footer);
       footer.innerHTML += "<div class='container'><div class='row'></div></div>";
       var Footer_Data = [{
               footer_nav01: "Home",
               footer_nav02: "About",
               footer_nav03: "Service",
               footer_nav04: "Gallery",
               footer_nav05: "Contact Us"
           },
           {
               footer_Service01: "Nursing Home",
               footer_Service02: "Netralay",
               footer_Service03: "24 Hours Avaiabel facility",
           },
           {
               footer_adsress: "Maharana Pratap Chowk,Near Ring Road 2 Chandela Nagar Bilaspur Chhattisgarh(495001)",
               footer_phone: "077524-07782",
			    footer_phone01: "83499-49990",
               footer_email: "company@gmail.com"
           }
       ];
       document.querySelector('footer>.container>.row').innerHTML += `
		<div class="col-md-4">
		<div class="footer_nav">
		<p>My Navigation</p>
		<ul>
		<li><a href="#myHome">${Footer_Data[0].footer_nav01}</a></li>
		<li><a href="#myAbout">${Footer_Data[0].footer_nav02}</a> </li>
		<li><a href="#netralaya">${Footer_Data[0].footer_nav03}</a>
		</li>
		<li><a href="#mygallery">${Footer_Data[0].footer_nav04}</a>
		</li>
		<li><a href="#myContact">${Footer_Data[0].footer_nav05}</a>
		</li>
		</ul>
		</div>
		</div>
		<div class="col-md-4">
		<div class="footer_nav">
		<p>Our facilities</p>
		<ul>
		<li><a href="">${Footer_Data[1].footer_Service01}</a>
		</li>
		<li><a href="">${Footer_Data[1].footer_Service02}</a>
		</li>
		<li><a href="">${Footer_Data[1].footer_Service03}</a>
		</li>
		</ul>
		</div>
		</div>
		<div class="col-md-4">
		<div class="footer_nav">
		<p>Address</p>
		<ul>
		<li><a href="">${Footer_Data[2].footer_adsress}</a>
		</li>
		<li><a href="">${Footer_Data[2].footer_phone}</a>
		</li>
		<li><a href="">${Footer_Data[2].footer_phone01}</a>
		</li>
		<li><a href="">${Footer_Data[2].footer_email}</a>
		</li>
		</ul>
		</div>

		</div>
		<div class="footer_bottom"></div>
		`;

   })(); //footer function