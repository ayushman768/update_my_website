    //jason data
    var arr = [{
        article01_head: "Hospital OverView",
        article01_para: "<b>Jai Ambey Netralaya</b> is one of the best <b>eye hospital in Bilaspur</b> it is a cataract surgery center with the most modern <b>equipment and technology </b>our <b>eye hospital is located at the heart of bilaspur city near Maharana pratap chowk Hospital is headed by (proprietor) Dr sewak ram sahu Dr Umesh Kumar sahu (anaesthesiologist) Dr veena sahu (Ophthalmologist) Dr veena sahu is specialist of medical retina (H.V.Desai eye hospital pune) and well experienced in cataract surgery (PHACO),Glaucoma treatment,Laser treatment and other eye related diseases ..Jai Ambey Netralaya mission is to maximise the visual potential of each patient through the quality treatment.</b>",
        article01_img: "img/jay_ambey_nusring_home_image.png"
    }, {
        article02_heading: "Available facilities in Jai Ambey Nursing Home",
    }];


    //article01 start
    var article = function() {
        //article01-strat
        var body = document.getElementById('body');

        var article = document.createElement('article');
        body.appendChild(article);
        article.setAttribute('class', 'article01');
        article.setAttribute('id', 'myAbout')
        article.innerHTML += "<div class='container'><div class='row'></div></div>";
        document.querySelector('.article01>.container>.row').innerHTML += `
            <div class="col-md-12">
            <div class="heading">
            <h2>${arr[0].article01_head}</h2>
            </div>
            </div>
            <div class="col-md-6">
            <div class="about_para">
            <p>${arr[0].article01_para}</p>
			
            </div>
			<ul class="pad-10">
			    <li><b>Medical Store</b> : 24 Hour Pharmacy facility Available.</li>
				<li>24 hours <b>Ambulance Service.</b></li>
				<li>Treatment facility by <b>'Ayushman Card'.</b></li>
			</ul>
            </div>
            <div class="col-md-6">
            <div class="about_img">
            <img src="${arr[0].article01_img}" class="img-responsive">
            </div>
            </div>
			
            <div class="text-center tab">
            <a  class="tablinks active" onclick="MyTab(event,'netralaya')">Netralay  Facilities</a>
            <a  class="tablinks" onclick="MyTab(event,'nursing')">Nursing Home Facilities</a>

            </div>
            `;
        //jason 02
        var article03 = function() {
            var article02 = document.createElement('article');
            body.appendChild(article02);
            article02.setAttribute('class', "article02 tab_content");
            article02.setAttribute('id', "nursing");

            document.querySelector('.article02').innerHTML += "<div class='container'><div class='row'></div></div>";

            document.querySelector('.article02>.container>.row').innerHTML += `
            <div class="col-md-12">
            <div class="services_heading">

            <h3 class="pad-10">${arr[1].article02_heading}</h3>
            <img src="img/nursingbanner.jpg" class="img-responsive">

            </div>
            </div>
            `;
            var Service_Data = function(image, Head_para) {
                this.image = image;
                this.Head_para = Head_para;

            }
            var Service01 = new Service_Data("img/1200px-Right_Inguinal_Hernia.jpg", "Hernia");
            var Service02 = new Service_Data("img/hidrocele.jpg", "Hidrocele");
            var Service03 = new Service_Data("img/piles.jpg", "Piles");
            var Service04 = new Service_Data("img/anal-fissure.jpg", "Fisher Piles");
            var Service05 = new Service_Data("img/appendix-stock.jpg", "Apendix");
            var Service06 = new Service_Data("img/Perforation.jpg", "Perforation");
            var Service07 = new Service_Data("img/kidney Stone.jpg", "kidney Stone");
            var Service08 = new Service_Data("img/03_LSP_Gallbladder-Removal_A1.jpg", "gall Bladder");
            var Service09 = new Service_Data("img/diabetes.png", "Diabetes");
            var Service10 = new Service_Data("img/heart-dieses.jpg", "Heart Disease");
            var Service11 = new Service_Data("img/asthma disease.jpg", "Asthma Disease");
            var Service12 = new Service_Data("img/obstetric.png", "Obstetric");
            var Service13 = new Service_Data("img/fracture.png", "Fracture");
            var Service14 = new Service_Data("img/pathological.jpg", "Pathological");
            var Service15 = new Service_Data("img/biochemistry.jpg", "Biochemistry");
            var Service16 = new Service_Data("img/X-rays.jpg", "X-rays & ECG");

            var arr01 = [Service01, Service02, Service03, Service04, Service05, Service06, Service07, Service08, Service09, Service10, Service11, Service12, Service13, Service14, Service15, Service16];

            for (var i in arr01) {
                document.querySelector('.article02>.container>.row').innerHTML += `
                <div class="col-md-3">
                <div class="Service_image text-center">
                <img src="${arr01[i].image}" >
                <ul>
                <li><b>${arr01[i].Head_para}</b></li>

                </ul>
                </div>
                </div>`;

            }


            (function() {
                var article04 = document.createElement('article');
                body.appendChild(article04);
                article04.setAttribute("class", "article04 tab_content ");
                article04.setAttribute("id", "netralaya");
                article04.innerHTML += "<div class='container'><div class='row'><h4 class='pad-10'>Facility available for the eyes in Jai Ambey Nursing Home<br><br><img src='img/eyebanner.jpg' class='img-responsive'></h4></div></div>"
                var ntralay_data = function(image01, n_para) {
                    this.image01 = image01;
                    this.n_para = n_para;
                }
                var ne_service01 = new ntralay_data("img/cataract-surgery.jpg", "Cataract Surgery");

                var ne_service02 = new ntralay_data("img/phoco.jpg", "Phaco Surgery");

                var ne_service03 = new ntralay_data("img/eye-examination.jpg", "Eye-Examination");
                var ne_service04 = new ntralay_data("img/applanation.jpg", "Applanation");

                var ne_service05 = new ntralay_data("img/contact-lenses.jpg", "Contact-lenses");

                var ne_service06 = new ntralay_data("img/pterygium_surgery.jpg", "pterygium surgery");

                var ne_service07 = new ntralay_data("img/what-is-lasik-recovery-side-effects.jpg", "green laser eye treatment");
                var ne_service08 = new ntralay_data("img/Eyelid-Surgery.jpg", "Eyelid-Surgery");
                arr02 = [ne_service01, ne_service02, ne_service03, ne_service04, ne_service05, ne_service06, ne_service07, ne_service08];
                for (var i in arr02) {
                    document.querySelector('.article04>.container>.row').innerHTML += `
                <div class="col-md-3">
                <div class="Service_image text-center">
                <img src="${arr02[i].image01}">
                <ul>
                <li>${arr02[i].n_para}</li>
                </ul>
                </div>
                </div>
                `;
                }
            })(); //jason data02
            var galery = (function() {
                    var article06 = document.createElement('article');
                    body.appendChild(article06);
                    article06.setAttribute('id', 'mygallery');
                    article06.setAttribute("class", "article06");
                    article06.innerHTML += "<div class='container-fluid'><div class='row'><h4>Our Gallery</h5></div></div>";
                    var g_img = function(gallery_img) {
                        this.gallery_img = gallery_img;
                    }
                    var img01 = new g_img("img/ambey_nursing_home-galler-1.jpg");
                    var img02 = new g_img("img/ambey_nursing_home-galler-2.jpg");
                    var img03 = new g_img("img/ambey_nursing_home-galler-3.jpg");
                    var img04 = new g_img("img/ambey_nursing_home-galler-4.jpg");
                    arr03 = [img01, img02, img03, img04];
                    for (var i in arr03) {
                        document.querySelector('.article06>.container-fluid>.row').innerHTML += `
                    <div class="col-md-3">
                    <div class="gallery_img">
                    <img src="${arr03[i].gallery_img}">
                    </div>
                    </div>
                    `;
                    }
                    var banner_div = (function() {
                        var bann_div = document.createElement('div');
                        body.appendChild(bann_div);
                        bann_div.innerHTML += `
                            <div class="container-fluid">
                            <div class="row">
                            <div class="col-md-12">
                            <div class="baner_div">
                            <img src="img/ambulance-banner.png" class="bnner_abulence">
                            </div>
                            </div>
                            </div>
                            </div>
                            `;
                        var address = function() {
                            var article05 = document.createElement('article');
                            body.appendChild(article05);
                            article05.setAttribute('class', 'article05');
                            article05.setAttribute('id', 'myContact')
                            article05.innerHTML += "<div class='container'><div class='row'></div></div>";
                            var data = [{
                                adress: "Maharana Pratap Chowk,Near Ring Road 2 Chandela Nagar Bilaspur Chhattisgarh(495001)",
                                phone: "07752-407782",
								phone01: "83499-49990",
                                email: "company@gmail.com"

                            }]
                            document.querySelector('.article05>.container>.row').innerHTML += `
                            <div class="col-md-6">
                            <div class="address">
                            <h5>Connect With Us</h5>
                            <ul>
                            <li> ${data[0].adress}</li>
                            <li> <a href="tel:07752407782">${data[0].phone}</li>
							 <li> <a href="tel:83499-49990">${data[0].phone01}</li>
                            <li> <a href="mailto:07752407782">${data[0].email}</li>
                            </ul>
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div class="address">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3697.365903170941!2d82.13470366442523!3d22.073838906656434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3a280b67f7f3f9bf%3A0x86564b6e7971c1a0!2sMaharana%20Pratap%20Chowk%2C%20Jarahbhata%2C%20Chhattisgarh!3m2!1d22.0732672!2d82.1380353!4m5!1s0x3a280b677467fbf9%3A0xa2b2515b77ff3f1f!2sJai%20Ambey%20Nursing%20Home%20%26%20netralaya%2C%20ring%20road%20no%202%20Durga%20medical%20store%20%2Cbhatia%20petrolpump%2C%20Jarahbhata%2C%20Bilaspur%2C%20Chhattisgarh%20495001!3m2!1d22.074307899999997!2d82.1357494!5e0!3m2!1sen!2sin!4v1607921369142!5m2!1sen!2sin" width="100%" height="290px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            </div>
                            `;

                        }
                        address(); //contact function

                    })(); //banner03 
                })() //galery fubction

        }
        article03(); //Services function//


    }
    article(); //article01 function