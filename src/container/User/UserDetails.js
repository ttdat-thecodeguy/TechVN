import React, { useEffect } from "react";
import './styles.css'
import * as UserServices from '../../store/action/userAction'
import { useDispatch, useSelector } from "react-redux";
import * as Config from '../../constraints/Config'
import { withRouter } from 'react-router-dom'

const UserDetails = (props) => {

    const dispatch = useDispatch();
    const [user] = useSelector((state) => [state.userReducers.user]);
  
    useEffect(() => {
      dispatch(UserServices.getUserDetails(props.history));
    }, [dispatch, props.history]);
    return (
        <div class="container">
            <div class="section-title m-4">
                <span class="caption d-block small">Trang Người Dùng</span>
                <h2>Thông tin cá nhân</h2>
            </div>

            <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="justify-content-center">
                   
                        <div class="card user-card-full">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25"> <img src={Config.IMG_URL_ACCOUNT + user.image} class="rounded-circle" alt="" /> </div>
                                        <h6 class="f-w-600">{user.fullName}</h6>
                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-block">
                                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Thông tin cá nhân</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-muted f-w-400">{user.email}</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <h6 class="text-muted f-w-400">{user.phone}</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Mô tả ngắn</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Lĩnh vực</p>
                                                <h6 class="text-muted f-w-400">{user.brief}</h6>
                                            </div>
                                           
                                        </div>
                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default withRouter(UserDetails);