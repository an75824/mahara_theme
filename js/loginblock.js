jQuery(function($) {
	"use strict";
	var $newLoginForm = $("<div class='c-card c-card--higher'>  <form class='pieform' name='login' method='post' id='login'>" +
		"<img class='o-image' src='https://www.yorksj.ac.uk/media/content-assets/safe-images/related-images/Safe-related-image-14.jpg'>"+
		"<div class='c-card__body'> <div class='o-field o-field--icon-left o-field--icon-right'>  <i class='fa fa-fw fa-user c-icon'></i>"+
		"<input class='c-field' id='login_login_username' name='login_username' tabindex='0' aria-required='true' value='' type='text' placeholder='Username/Email' required>"+
		"</div> <div class='o-field o-field--icon-left'> <i class='fa fa-fw fa-key c-icon'></i>"+
		"<input class='c-field' id='login_login_password' name='login_password' tabindex='0' aria-required='true' type='password' placeholder='Password' required>"+
		"</div> <footer class='c-card__footer c-card__footer--block'>"+
		"<div class='c-input-group'> <button class='c-button c-button--rounded c-button--ghost-brand'>Login</button>"+
		"<input type='hidden' class='hidden' id='login_sesskey' name='sesskey' value=''>"+
		"<input type='hidden' name='pieform_login' value=''></div> </footer></form></div>");
	$('.panel-body').html($newLoginForm);//replace panel-body class with the above elements
});
