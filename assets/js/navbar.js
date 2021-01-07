document.write(`
<nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="" srcset=""></a>
        <ul class="navbar-nav small_nav m-auto">
          <li class="date_nav">
            <a href="javascript:void(0)" class="nav-link lang date" id="s-date"></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="search.html"><i class="fas fa-search"></i></a>
          </li>
          
          <li class="nav-item dropdown">
            <span class="nav-link" data-toggle="dropdown">
              <i class="fas fa-language"></i>
            <span>
              <div class="dropdown-menu language-dropdown d-none" aria-labelledby="navbarDropdown">
                  <div class="row m-0">
                    <div class="col-g-6 lang-parent bord first_bord trans" id="en">
                        <span class="active">english</span>
                    </div>
                    <div class="col-g-6 lang-parent trans" id="ar"> 
                        <span>العربية</span>
                    </div>    
                    <div class="col-g-6 lang-parent trans bord" id="fr">
                        <span>french</span>
                    </div>
                    <div class="col-g-6 lang-parent trans">
                        <span>germany</span>
                    </div>    
                    <div class="col-g-6 lang-parent bord trans">
                        <span>french</span>
                    </div>
                    <div class="col-g-6 lang-parent trans">
                        <span>germany</span>
                    </div>  
                    <div class="col-g-6 lang-parent bord trans">
                        <span>french</span>
                    </div>
                    <div class="col-g-6 lang-parent trans">
                        <span>germany</span>
                    </div>    
                    <div class="col-g-6 lang-parent bord trans">
                        <span>french</span>
                    </div>
                    <div class="col-g-6 lang-parent trans">
                        <span>germany</span>
                    </div>
                    <div class="col-g-6 lang-parent bord trans">
                        <span>french</span>
                    </div>
                    <div class="col-g-6 lang-parent trans">
                        <span>germany</span>
                    </div>
                </div>
              </div> 
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu user_list" aria-labelledby="navbarDropdown">
              <a class="dropdown-item d-flex justify-content-end flex-row-reverse login" href="user_profile.html">
                <span class="mr-3 ml-2 lang" key="Profile">Profile</span>
                <span><i class="fas fa-user"></i></span> 
                </a>
                <a class="dropdown-item d-flex justify-content-end flex-row-reverse login" href="signIn.html">
                <span class="mr-3 ml-2 lang" key="login">login</span>
                <span><i class="fas fa-user"></i></span> 
                </a>
                <a class="dropdown-item d-flex justify-content-end flex-row-reverse sign-up" href="signUp.html">
                <span class="mr-3 ml-2 lang" key="createaccount">create account</span>
                <span><i class="fas fa-user-friends"></i></span> 
                </a>
                <a class="dropdown-item d-flex justify-content-end flex-row-reverse sign-up" href="nomination.html">
                  <span class="mr-3 ml-2 lang" key="">nomination</span>
                  <span><i class="fas fa-id-card"></i></span> 
                  </a>
                <a class="dropdown-item d-flex justify-content-end flex-row-reverse" href="javascript:void(0)">
                <span class="mr-3 ml-2 lang" key="logout">log out</span>
                <span><i class="fas fa-sign-out-alt"></i></span>
                </a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link crown_notification" href="javascript:void(0)" data-toggle="dropdown"><i class="fas fa-crown"></i></a>
            <div class="dropdown-menu crown_notify" aria-labelledby="navbarDropdown">
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                <div class="left_data">
                  <p>user name</p>
                  <div class="d-flex justify-content-around align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data d-flex align-items-center justify-content-center">
                    <i class="fas fa-crown"></i>
                </div>
              </div>
            </div>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link notification_toggle" data-toggle="dropdown" href="javascript:void(0)">
              <i class="fas fa-bell"></i>
            </a>
            <div class="dropdown-menu notification_list" aria-labelledby="navbarDropdown">
              <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                  <p>user name</p>
                  <div class="d-flex align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data">
                    <div class="d-flex align-items-center justify-content-center mb-1">
                      <a href="javascript:void(0)" class="mr-1 cancel">
                        <i class="fas fa-times"></i>
                      </a>
                      <a href="javascript:void(0)" class="ml-1 check">
                        <i class="fas fa-check"></i>
                      </a>
                    </div>
                    <span>24/4/2020</span>
                    <span>14:56pm</span>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                  <p>user name</p>
                  <div class="d-flex align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data">
                    <div class="d-flex align-items-center justify-content-center mb-1">
                      <a href="javascript:void(0)" class="mr-1 cancel">
                        <i class="fas fa-times"></i>
                      </a>
                      <a href="javascript:void(0)" class="ml-1 check">
                        <i class="fas fa-check"></i>
                      </a>
                    </div>
                    <span>24/4/2020</span>
                    <span>14:56pm</span>
                </div>
              </div>
              <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                  <p>user name</p>
                  <div class="d-flex align-items-center">
                    <span class="d-inline-block">data</span>
                    <span class="d-inline-block">100%</span>
                  </div>
                </div>
                <div class="right_data">
                    <div class="d-flex align-items-center justify-content-center mb-1">
                      <a href="javascript:void(0)" class="mr-1 cancel">
                        <i class="fas fa-times"></i>
                      </a>
                      <a href="javascript:void(0)" class="ml-1 check">
                        <i class="fas fa-check"></i>
                      </a>
                    </div>
                    <span>24/4/2020</span>
                    <span>14:56pm</span>
                </div>
              </div>
            </div>
          </li>
          
          <li>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto center_nav lang_change any_lang">
            <li class="nav-item active" data-scroll="header">
              <a class="nav-link lang" key="home" href="index.html">home</a>
            </li>
            <li class="nav-item" data-scroll="footer">
              <a class="nav-link lang vid" href="javascript:void(0)" key="donation">donation</a>
            </li>
            <li class="nav-item" data-scroll="footer">
              <a href="javascript:void(0)" class="nav-link lang" key="who we are">who we are</a>
            </li>
            <li class="nav-item" data-scroll="contact">
              <a href="javascript:void(0)" class="nav-link lang" key="contact us">contact us</a>
            </li>
          </ul>
            <ul class="navbar-nav small_right_nav">
                <li class="">
                  <a href="javascript:void(0)" class="nav-link lang date" id="date"></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link crown_notification" href="javascript:void(0)" data-toggle="dropdown"><i class="fas fa-crown"></i></a>
                  <div class="dropdown-menu crown_notify" aria-labelledby="navbarDropdown">
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify" data-toggle="modal" data-target="#exampleModalx">
                      <div class="left_data">
                        <p>user name</p>
                        <div class="d-flex justify-content-around align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data d-flex align-items-center justify-content-center">
                          <i class="fas fa-crown"></i>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="search.html"><i class="fas fa-search"></i></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link notification_toggle" data-toggle="dropdown" href="javascript:void(0)">
                    <i class="fas fa-bell"></i>
                  </a>
                  <div class="dropdown-menu notification_list" aria-labelledby="navbarDropdown">
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                      <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                        <p>user name</p>
                        <div class="d-flex align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data">
                          <div class="d-flex align-items-center justify-content-center mb-1">
                            <a href="javascript:void(0)" class="mr-1 cancel">
                              <i class="fas fa-times"></i>
                            </a>
                            <a href="javascript:void(0)" class="ml-1 check">
                              <i class="fas fa-check"></i>
                            </a>
                          </div>
                          <span>24/4/2020</span>
                          <span>14:56pm</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                      <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                        <p>user name</p>
                        <div class="d-flex align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data">
                          <div class="d-flex align-items-center justify-content-center mb-1">
                            <a href="javascript:void(0)" class="mr-1 cancel">
                              <i class="fas fa-times"></i>
                            </a>
                            <a href="javascript:void(0)" class="ml-1 check">
                              <i class="fas fa-check"></i>
                            </a>
                          </div>
                          <span>24/4/2020</span>
                          <span>14:56pm</span>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between p-4 mb-2 item_notify">
                      <div class="left_data" data-toggle="modal" data-target="#exampleModaly">
                        <p>user name</p>
                        <div class="d-flex align-items-center">
                          <span class="d-inline-block">data</span>
                          <span class="d-inline-block">100%</span>
                        </div>
                      </div>
                      <div class="right_data">
                          <div class="d-flex align-items-center justify-content-center mb-1">
                            <a href="javascript:void(0)" class="mr-1 cancel">
                              <i class="fas fa-times"></i>
                            </a>
                            <a href="javascript:void(0)" class="ml-1 check">
                              <i class="fas fa-check"></i>
                            </a>
                          </div>
                          <span>24/4/2020</span>
                          <span>14:56pm</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)">
                    <i class="fas fa-user"></i>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item d-flex justify-content-end flex-row-reverse login" href="user_profile.html">
                      <span class="mr-3 ml-2 lang" key="Profile">Profile</span>
                      <span><i class="fas fa-user"></i></span> 
                      </a>
                      <a class="dropdown-item d-flex justify-content-end flex-row-reverse login" href="signIn.html">
                      <span class="mr-3 ml-2 lang" key="login">login</span>
                      <span><i class="fas fa-user"></i></span> 
                      </a>
                      <a class="dropdown-item d-flex justify-content-end flex-row-reverse sign-up" href="signUp.html">
                      <span class="mr-3 ml-2 lang" key="createaccount">create account</span>
                      <span><i class="fas fa-user-friends"></i></span> 
                      </a>
                      <a class="dropdown-item d-flex justify-content-end flex-row-reverse sign-up" href="nomination.html">
                        <span class="mr-3 ml-2 lang" key="">nomination</span>
                        <span><i class="fas fa-id-card"></i></span> 
                        </a>
                      <a class="dropdown-item d-flex justify-content-end flex-row-reverse" href="javascript:void(0)">
                      <span class="mr-3 ml-2 lang" key="logout">log out</span>
                      <span><i class="fas fa-sign-out-alt"></i></span>
                      </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <span class="nav-link" data-toggle="dropdown">
                    <i class="fas fa-language"></i>
                  <span>
                    <div class="dropdown-menu language-dropdown d-none" aria-labelledby="navbarDropdown">
                        <div class="row m-0">
                          <div class="col-g-6 lang-parent bord first_bord trans" id="en">
                              <span class="active">english</span>
                          </div>
                          <div class="col-g-6 lang-parent trans" id="ar"> 
                              <span>العربية</span>
                          </div>    
                          <div class="col-g-6 lang-parent trans bord" id="fr">
                              <span>french</span>
                          </div>
                          <div class="col-g-6 lang-parent trans">
                              <span>germany</span>
                          </div>    
                          <div class="col-g-6 lang-parent bord trans">
                              <span>french</span>
                          </div>
                          <div class="col-g-6 lang-parent trans">
                              <span>germany</span>
                          </div>  
                          <div class="col-g-6 lang-parent bord trans">
                              <span>french</span>
                          </div>
                          <div class="col-g-6 lang-parent trans">
                              <span>germany</span>
                          </div>    
                          <div class="col-g-6 lang-parent bord trans">
                              <span>french</span>
                          </div>
                          <div class="col-g-6 lang-parent trans">
                              <span>germany</span>
                          </div>
                          <div class="col-g-6 lang-parent bord trans">
                              <span>french</span>
                          </div>
                          <div class="col-g-6 lang-parent trans">
                              <span>germany</span>
                          </div>
                      </div>
                    </div> 
                </li>
            </ul>
        </div>
        </div>
      </nav>
`)