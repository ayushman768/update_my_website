   var myBnner_section = (function() {

       //jason data
       var arr = [{
           banner: "img/jay_ambey_nurshing_home_banner.png",
           banner01: "img/jay_ambey_nurshing_home_banner-01.png",
           banner02: "img/jay_ambey_nurshing_home_banner-02.png",
		   banner03: "img/jay_ambey_nurshing_home_banner-04.png",
		   banner04: "img/jay_ambey_nurshing_home_banner-05.png",
		   banner05: "img/jay_ambey_nurshing_home_s.r.sahu_banner-06.png",
           moarq_text: "Treatment facility by <b>'Ayushman Card'</b> <u>Jai Ambey Nursing Home and Netralaya,</u> <i>Address : </i><b> Maharana Pratap Chowk,Near Ring Road 2 Chandela Nagar Bilaspur Chhattisgarh(495001).</b>"
       }];


       //banner section start
       var section = document.createElement('section');
       body.appendChild(section);
       section.setAttribute('class', 'Section');

       document.querySelector('section').innerHTML += `

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
				<li data-target="#myCarousel" data-slide-to="3"></li>
				<li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
               

                <div class="item active">
                <img src="${arr[0].banner01}" alt="jay_ambey_nursing_home_Hospital">
                </div>
				<div class="item ">
                <img src="${arr[0].banner05}" alt="Dr.umesh_sahu_jay_ambey_nursing_home_bilaspur">
                </div>
				
				<div class="item ">
                <img src="${arr[0].banner04}" alt="Dr.Umesh_sahu_bilaspur_jay_ambey_nusring_home">
                </div>
				<div class="item">
                <img src="${arr[0].banner03}" alt="Dr.Veena_sahu_ gynecologist_bilaspur">
                </div>
				
                <div class="item">
                <img src="${arr[0].banner02}" alt="Jay_ambey_nursing_home_netralay">
                </div>
				
				
                <div class="item ">
                <img src="${arr[0].banner}" alt="Los Angeles">
                </div>
				
				


                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
                </div>
                <marquee><p><b>Note :</b>  ${arr[0].moarq_text}</p></marquee>

                `;


   })(); //Section_banner function