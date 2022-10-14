const NavigationSidebar = (active) => {
    return (`
   <div class="list-group" id="navList">
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a href="#Twitter" class="list-group-item list-group-item-action">
           <i class="fab fa-twitter fa-1x nv-link"></i>
       </a>
       <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active == 'home' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-house"></i>        
                        </div>
                        <div class="d-none d-xl-block col-xl-10 col-xxl-10">Home</div>
                    </div>
                </a>
       <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active == 'explore' ? 'active' : ''}">
                    <div class="row">
                        <div class=" col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-hashtag fa-1x"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-10 col-xxl-10">Explore</div>
                    </div>
                </a>
       <a href="#Notification" class="list-group-item list-group-item-action ${active == 'notification' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-bell"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-10 col-xxl-10">Notification</div>
                    </div>
                </a>
       <a href="#Messages" class="list-group-item list-group-item-action ${active == 'messages' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-10 col-xxl-10">Messages</div>
                    </div>
                </a>
       <a href="#Bookmarks" class="list-group-item list-group-item-action ${active == 'bookmarks' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-10 col-xxl-10">Bookmarks</div>
                    </div>
                </a>
       <a href="#Lists" class="list-group-item list-group-item-action ${active == 'lists' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-list fa-1x"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-2 col-xxl-2">Lists</div>
                    </div>
                </a>
       <a href="#Profile" class="list-group-item list-group-item-action ${active == 'profile' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="d-none  d-xl-block col-xl-2 col-xxl-2">Profile</div>
                    </div>
                </a>
       <a href="#More" class="list-group-item list-group-item-action ${active == 'more' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                            <span class="fa-stack fa-1x" style="height: 24px">
                                <i class="far fa-circle position-absolute" style="width: 100%; left:0px"></i>
                                <i class="fas fa-ellipsis-h position-absolute" style="width: 100%; left: 0px"></i>
                            </span></br>
                        </div>
                        <div class="d-none d-xl-block col-xl-10 col-xxl-10">More</div>
                    </div>
                </a>        
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;