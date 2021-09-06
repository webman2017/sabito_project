<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Service</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/customs.css">
    <link rel="stylesheet" href="css/sidebar.css">
    <link rel="stylesheet" href="fonts/stylesheet.css" type="text/css" charset="utf-8" />
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="css/splide.min.css">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <script src="https://kit.fontawesome.com/48956afbda.js" crossorigin="anonymous"></script>


</head>

<body>
<?php include 'headeroverlay.php';?>
    <div class="wrapper"> 
        <?php include 'header.php';?>

        <div class="jumbotron jumbotron-fluid banner-page " style="">
            <img class="d-none d-md-block" src="images/banner_mini.png" alt="">
            <img class="d-block d-md-none" src="images/mb_ourservice.png" alt="">
            <div class="container">
                <h1 class="display-4">สินค้าและบริการ</h1>
                <p class="lead">PRODUCT AND SERVICES</p>
            </div>
        </div>

        <section class="shortcutkey mt-lg-5">
            <div class="container-md">
                <div class="sidebar-tab sidebar-tab1 nohover" id="fixed_cart_icon">
                     <div>
                        <a href="requestonline.php">
                        <img class="icon_side1" src="images/sck_04.png" width="60" alt="">
                        <img class="icon_side2" src="images/sck_03.png" width="70" alt="">
                    </a>
                    </div>
                </div>
                <div class="sidebar-tab2 sidebar-tab" id="fixed_cart_icon">
                    <div>
                        <a href="openaccount.php">
                        <img class="icon_side1" src="images/sck_08_03.png" width="80" alt="">
                        <img class="icon_side2" src="images/sck_09_03.png" width="60" alt="">
                        </a>
                    </div>
                </div>
               <div class="sidebar-tab3 sidebar-tab" id="fixed_cart_icon">
                    <div  data-toggle="modal" data-target="#modaltool3">
                        <div>
                            <img class="icon_side1" src="images/sck_06_03.png" width="60" alt="">
                            <img class="icon_side2" src="images/sck_05_03.png" width="70" alt="">
                        </div>
                      </div>
                      
                   
                </div>
            </div>

        </section>
        <div class="modal fade" id="modaltool3" tabindex="-1" role="dialog" aria-labelledby="modaltool3Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modaltool3Label">คำนวณค่าคอมมิชชั่น</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div role="form" class="form-container cal_detail mt-3">
                                              
                        <p>ซื้อ/ขายหุ้น (บาท)</p>
                        <!--<input id="txtBuy" type="text" onchange="calCommision();" oninput="this.value = this.value.replace(/[^0-9.]/g, ''); this.value = this.value.replace(/(\..*)\./g, '$1');this.onchange();" />-->
                        <input id="txtBuy" type="text" class="number"><br><br>
                
                        <label style="font-size:94.5%">ค่าคอมมิชชั่น *</label><br>
                        <label><span id="lblCom"></span></label><br>
                
                
                        <label style="font-size:94.5%">
                
                            ค่าธรรมเนียมตลาดฯ และ กำกับดูแล (0.007%)
                        </label><br>
                        <label><span id="lblFee"></span></label><br>
                
                        <label style="font-size:94.5%">
                            <label style="font-size:94.5%">ภาษีมูลค่าเพิ่ม (7%)</label>
                
                        </label><br>
                        <label><span id="lblTax"></span></label><br>
                
                        <label><span id="lblSum"></span></label><br>
                        <label><span style="color:red;font-size:94.5%">*ค่าคอมมิชชั่นที่ใช้คำนวณ เป็นค่าคอมมิชชั่นของบัญชีประเภท Cash Balance และ Credit Balance</span></label>
                      <div class="btn-footer">
                        <button type="button" class="btn btn-close" data-dismiss="modal">Close</button>

                      </div>
                
                    </div>
                </div>
               
              </div>
            </div>
          </div>
        <div class="ourservice mb-5">
            <div class="container ">
                <div class="row">
                    <div class="col-xl-3 col-md-3 col-sm-3">
                        <section class="pull-right d-none d-md-block">
                            <ul class="sidebar-menu">
                                <li>
                                    &nbsp;
                                </li>
                                <li class="active">
                                    <a href="#">
                                        <span>หุ้น</span>
                                        <i class="fa  fa-caret-right pull-right"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li class="active">
                                        <a href="ours_CashBalance.php"> Cash Balance <i class="fa  fa-caret-right pull-right"></i></a>
                                            <ul class="sidebar-submenu menu-open">
                                                <li><a href="ours_CashBalance.php">Commision เทียบกับตลาด</a></li>
                                                <li><a href="commission_cal1.php">เครื่องคิดเลขคำนวณค่าคอมฯ</a></li>
                                                <li><a href="howtoopenacc.php">วิธีการเปิด / เอกสารที่ต้องใช้</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Cash Account<i class="fa  fa-caret-right pull-right"></i></a>
                                            <ul class="sidebar-submenu">
                                                <li><a href="ours_CashAccount.php">Commision เทียบกับตลาด</a></li>
                                                <li><a href="commission_cal2.php">เครื่องคิดเลขคำนวณค่าคอมฯ</a></li>
                                                <li><a href="howtoopenacc_ac.php">วิธีการเปิด / เอกสารที่ต้องใช้</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Credit Balance <i class="fa  fa-caret-right pull-right"></i></a>
                                            <ul class="sidebar-submenu menu-open">
                                                <li><a href="ours_CreditBalance.php">Commision เทียบกับตลาด</a></li>
                                                <li><a href="https://www.sbito.co.th/Margin/Views/Margin/Marginstock.aspx">Marginable Stock List</a></li>
                                                <li><a href="commission_cal3.php">เครื่องคิดเลขคำนวณค่าคอมฯ</a></li>
                                                <li><a href="howtoopenacc_creditb.php">วิธีการเปิด / เอกสารที่ต้องใช้</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#">
                                        <span>อนุพันธ์</span>
                                        <i class="fa  fa-caret-right pull-right"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li><a href="productforservices.php">สินค้าที่ขาย</a>

                                        <li><a href="../../index.php">Commission เทียบกับตลาด / อัตราหลักประกัน</a>
                                        <li><a href="howtoopenacc_2.php">วิธีการเปิด / เอกสารที่ต้องใช้</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>กองทุน</span>
                                        <i class="fa  fa-caret-right pull-right"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li><a href="whyopenfund.php">ทำไมต้องเปิดกองทุนกับ SBITO</a></li>

                                        <li><a href="fundproduct.php">มีกองทุนอะไรบ้าง</a>
                                        <li><a href="howtoopenacc_fund.php">วิธีการเปิด / เอกสารที่ต้องใช้</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>เทรดต่างประเทศ</span>
                                        <i class="fa  fa-caret-right pull-right"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li><a href="#">Commision เทียบกับตลาด</a></li>


                                        <li><a href="../../index.php">ข้อดี เทียบกับตลาด</a>
                                        <li><a href="../../index.php">วิธีการเปิด / เอกสารที่ต้องใช้</a>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>เครื่องมือการลงุทน </span> <i class="fa  fa-caret-right pull-right"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li><a href="https://www.sbito.co.th/upload/Manual_1508903616_91646.pdf">Streaming</a></li>
                                        <li><a href="https://www.sbito.co.th/sbitradeai/default.aspx">SBITrade AI</a></li>
                                    </ul>
                                </li>


                            </ul>
                            <div class="open_sidebar mt-5">
                                <img src="images/open_sidebar.png" alt="">
                            </div>

                        </section>
                        <section class="d-block d-md-none">
                            <ul class="sidebar-menu sidebar-menumb">
                             
                                <li>
                                    <a href="#">
                                        <span>Commission เทียบกับตลาด</span>
                                        <i class="fas fa-bars"></i>
                                    </a>
                                    <ul class="sidebar-submenu">
                                        <li>
                                            <a href="ours_CashBalance.php" > Commission เทียบกับตลาด</a>
                                            <a href="commission_cal1.php"> เครื่องคิดเลขคำนวณค่าคอมฯ </a>
                                            <a href="howtoopenacc.php"> วิธีการเปิด / เอกสารที่ต้องใช้</a>
                                          
                                        </li>
                                      
                                    </ul>
                                </li>

                      

                            </ul>
                            <div class="open_sidebar mt-5 d-none d-md-block">
                                <img src="images/open_sidebar.png" alt="">
                            </div>

                        </section>
                    </div>
                    <div class="col-xl-9 col-md-9 col-sm-9">
                        <div class="head_ourservice d-none d-md-block">
                            <h1>
                              Cash Account 
                            </h1>
                        </div>

                        <h1 class="head-ac">บัญชี Cash Account</h1>
                        <img width="80%" src="images/บัญชี-ac.png" style="margin-left: 7%;">
                        <div class="regis-ac">
                            สมัครเปิดบัญชี Cash Account วันนี้<br>
                            <a class="open-ac">เปิดบัญชี</a>
                        </div>
                        <!-- <div>
                        ท่านจะได้รับการอนุมัติวงเงินในการซื้อขายหลักทรัพย์ ซึ่งบริษัทจะพิจารณาจากหลักฐานทางการเงินและความสามารถในการลงทุนของท่าน<br>
                        โดยกำหนดให้ลูกค้าต้องวางหลักประกันจำนวน 20% ของงวงเงินซื้อขายหลักทรัพย์ ซึ่งเงินและหุ้นสามารถนำมาคำนวณเป็นหลักประกันได้
                        </div>
                        <ul>
                            <li>มูลค่าในการซื้อขายหลักทรัพย์สูงสุดไม่เกินวงเงินที่ได้รับอนุมัติ</li>
                            <li>ก่อนเริ่มทำการซื้อขายหลักทรัพย์ ท่านต้องทำการฝากเงิน หรือฝากหุ้นเข้ามาเพื่อเป็นหลักประกันในการซื้อขายหลักทรัพย์<br>จำนวน 20% ของวงเงินซื้อขายหลักทรัพย์</li>
                            <li>ค่าซื้อหลักทรัพย์จะถูกหัก โดยวิธีการหักเงินแบบอัตโนมัติ (ATS) จากบัญชีคุณ 2 วัน หลังจากคำสั่งซื้อนั้นสำเร็จแล้ว (T+2)</li>
                            <li>ค่าซื้อหลักทรัพย์จะถูกเพิ่ม โดยวิธีฝากเงินแบบอัตโนมัติ (ATS) จากบัญชีคุณ 2 วัน หลังจากคำสั่งขายนั้นสำเร็จแล้ว (T+2)</li>
                        </ul> -->

                    </div>

                </div>
            </div>
        </div>
        <footer>
            <div class="container-md">
                <div class="row">
                    <div class="col-lg-3 foot-left">
                        <img src="images/SBITO-all-logo_ขาว.png" alt="">
                        <p class="mt-2">
                            SBI Thai Online Securities Co., Ltd. <br>
                            1768 Thai Summit Tower 31st Fl.,
                            New Petchburi Rd.,Bangkapi,Huaykwang,
                            Bkk 10310 Thailand
                        </p>
                    </div>
                    <div class="col-lg-3 foot-center">
                        <p class="p-center">ติดต่อสอบถาม</p>
                        <p class="p-center1">ลูกค้าสัมพันธ์
                        </p>
                        <h2 class="p-center2"><a href="tel:02-022-1499">02 022 1499</a></h2>
                        <h2 class="p-center2"><a href="tel:02-112-1499">02 112 1499</a> </h2>
                        <p class="p-center3"><a href="mailto:support@sbito.co.th"> support@sbito.co.th</a>
                           
                        </p>
                    </div>
                    <div class="col-lg-3 foot-center2">
                        <p class="">SOCIAL NETWORK</p>
                        <div class="social_icon">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <img src="images/Footer icon-01.png" width="35" alt="">
                                        <img src="images/Footer icon-02.png" width="35" alt="">
                                        <img src="images/Footer icon-03.png" width="35" alt="">
                                        <img src="images/Footer icon-04.png" width="35" alt="">
                                        <img src="images/Footer icon-05.png" width="35" alt="">
                                    </div>
                                    <div class="w-100"></div>
                                    <div class="col-sm">
                                        <img class="mt-lg-2 dbd_mb" src="images/DBD.png" alt="">
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                    <div class="col-lg-3 foot-right">
                        <p class="d-none d-md-block">ดาวน์โหลดแอปพลิเคชั่น</p>
                        <div class="row">
                            <div class="col col-md-4 pull-xs-right">
                                <img src="images/footer_icon_18.png" class="d-none d-md-block" width="80" alt="">

                                <img src="images/Appstore.png" width="80" alt="">


                            </div>
                            <div class="col pull-xs-left">
                                <img src="images/footer_icon_18.png" class="d-none d-md-block" width="80" alt="">

                                <img src="images/Googlrplay.png" width="80" alt="">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <!-- wrapper -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/calculatecommission.js"></script>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous">
    </script>
    <script src='https://codepen.io/z-/pen/a8e37caf2a04602ea5815e5acedab458.js'></script>
    <script src="js/slick.js"></script>
    <script src="js/splide.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/coin.js"></script>
    <script src="js/js.js"></script>
    <script src="js/sidebar.js"></script>
    <script>
        $.sidebarMenu($('.sidebar-menu'))
    </script>
    <script>
        $.sidebarMenumb($('.sidebar-menu'))
    </script>
    <script>
        $('.btn-open').on('click', function () {
            $("#menu-mb").css("display", "block");
        });
        $('.btn-close').on('click', function () {
            $("#menu-mb").css("display", "none");
        });
        $(document).ready(function () {
            $(".navbar-toggler a").click(function () {
                $(".overlay").fadeToggle(200);
                $(this).toggleClass('btn-open').toggleClass('btn-close');
            });

        });
        $('.btn-close').on('click', function () {
            $(".overlay").fadeToggle(200);
            $(".navbar-toggler a").toggleClass('btn-open').toggleClass('btn-close');

            open = false;
        });
    </script>
</body>

</html>