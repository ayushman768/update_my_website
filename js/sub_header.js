    //main Function
    var fun = (function() {
        //header_start
        var body = document.getElementById('body');
        var div = document.createElement('div');
        body.appendChild(div);
        div.setAttribute('class', 'sub_header')
        div.setAttribute('id', 'myHome');
        var body = document.getElementById('body');
        var header = document.createElement('header');
        body.appendChild(header);
        header.setAttribute("id", "my_header")
        var hed = document.getElementsByTagName('header')[0].innerHTML += "<div class='container-fluid'><div class='row'></div></div>";


        var arr = [{
                logo: "Jai Ambey Nursing Home",

            },
            {
                nav01: "Home",
                nav02: "About",
                nav03: "Services",
                nav04: "Gallery",
                nav05: "Contact Us"
            }, {
                timing: "OPD Timing - 10:00am to 2:00pm & 6:00 pm to 8:00pm",
                phone: "07752-407782",
				phone01: "83499-49990",
            }
        ];
        var mysubHeader = function() {
            document.querySelector('.sub_header').innerHTML += `

                <div class="container">
                <div class="row">
                <div class="col-md-6">
                <div class="timing text-center">

                <span><img src="img/icons8-clock-64.png"><b>${arr[2].timing}</b></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="phone text-center">
                <span><img src="img/icons8-phone-24.png"><a href="tel:${arr[2].phone}"><b>${arr[2].phone}</a></b></span>&nbsp;&nbsp;&nbsp;
                <span><a href="tel:${arr[2].phone}"><b>${arr[2].phone01}</a></b></span>
                </div>
                </div>
                </div>

                </div>

                `;
            var Myheader = function() {
                document.querySelector('header>.container-fluid>.row').innerHTML += `
               
                <div class="col-md-6">
                <div class="Logo_Jay_Ambey_Nurshing_Home">
                <span class="logo"><img src="img/logo-ambey.png"><h1>${arr[0].logo}</h1></span>
                <img src="img/menu.png" class="menu_btn" onclick="menu()">
                </div>
                </div>
                <div class="col-md-6">
                <div class="Navigation_Jay_Ambey_Nurshing_Home pad-10">
                <ul class="nav navbar-nav">
                <li><a href="#myHome" ><b>${arr[1].nav01}</b></a></li>
                <li><a href="#myAbout"><b>${arr[1].nav02}</b></a></li>
                <li><a href="#netralaya"><b>${arr[1].nav03}</b></a></li>
                <li><a href="#mygallery"><b>${arr[1].nav04}</b></a></li>
                <li><a href="#myContact"><b>${arr[1].nav05}</b></a></li>

                </ul>
                </div>
                </div>
    `;

            }
            Myheader(); //MyHeader function
        }
        mysubHeader(); //Sub-header

    })(); //jason function