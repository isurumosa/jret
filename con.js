<?php
// define static var
define('DRUPAL_ROOT', getcwd());

include_once(DRUPAL_ROOT.'/includes/bootstrap.inc');

drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

global $user;
 
?>
var current_location = window.location.href;
DLG.init({
 
                                       appId: 'HkBfPs', 
                                       callBack: function(data) { 
					                   if(data.status) {
									   var respnc_obj = JSON.stringify(data);
									   $('.loginbar ul').empty();
                                                $('.loginbar ul').append("<li><a href='#' onClick='DLG.logout()'>Logout</a></li>" );    												
                                                $('.loginbar ul').append("<li><a href='#'>" + data.title  + " " + data.firstName + " " + data.lastName  + "</a></li>");
                                                $('.loginbar').fadeIn(300);
                                        data_arr={
                                           	 "status":data.status,
                                             "dob"  :data.dob,
                                             "userID" :data.userID,
                                             "idType"  :data.idType,
                                             "email" :data.email,
                                             "title"  :data.title,
                                             "lastName"  :data.lastName,
                                             "firstName"  :data.firstName,
                                             "gender"  :data.gender,
                                             "contactNo" :data.contactNo,
                                             "dialog_login_func" :"set",
                                             "idNumber"  :data.idNumber,
											 "res_obj" : respnc_obj,
											 "json" : data};
										
                                       $.ajax({
                                             type: "POST",
                                             url: "/dilog_connection.php",
                                             data: data_arr,
                                             success: function(datas){
												
												alert(datas);
												 if(datas ="now_user_loged_in"){
												    <?php if($user->uid == 0):?> 
													//alert(current_location+' - Current Loc'); 
													$(location).attr('href',current_location); 
													<?php endif;?>
													   
												 }
      										 },
      										 error:function(jqXHR, exception){
     										 }	
                                       });	
									   
				                       } 
				                       else {
				                       	 
				                       	 data_disconnect={
                                             "dialog_logout_func" :"set"};
											 
                                       $.ajax({
                                             type: "POST",
                                             url: "/dialog_disconnect.php",
                                             data: data_disconnect,
                                             success: function(datas){
												if(datas=="user_loged_out"){
												  $(location).attr('href','./?q=user/logout');
												}
												else{
												}
      										 },
      										 error:function(jqXHR, exception){
     										 }	
                                       });	
                                       }
                                      },    
                                logoutCallback: function() {  
									sleep(1000);  
									setTimeout(function(){return true;},3000);
                                    $(location).attr('href','./?q=user/logout');
                                }
								
                });
				
				function username(name){				
				if(name.length=>3){
           var n=name.replace(name.slice(3),"...");
               }
                   else{               
				 var n=var name;
                      }
				}
				
				
				
				$(document).ready(function (data){ 
			$('.idea').click(function (data){
				if($(this).attr('href') == '#'){
				     $.fancybox({
				 		'scrolling' 	: 'no',
						'overlayShow'	: true,
						'transitionIn'	: 'fade',
						'transitionOut'	: 'fade',
						'autoScale'	: true,
						//'href'		: 'http://www.ideamart.lk/templates/default/ajax/ui_login_instruction.php',
						'titlePosition' : 'inside',
					}); 
				}
			});
			return true;
		});
				
				

	
