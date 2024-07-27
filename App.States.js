
function AppState() {
	this.NavRouter = function (lay) {
		var state = CheckLoginState();
		if (state) {
			//CreateAppbar();
			//	CreateDrawer();
			Route_LoggedIn(lay);
		}
		else {
			Route_LoggedOut(lay);
		}
	}
}
//-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
function CheckLoginState() {
	var LoginStateFile = "LoginState.json";
	var LoginState = app.LoadJson("LoginState", "{}", LoginStateFile);
		if (LoginState) {
			var LoginStateOBJ = JSON.parse(LoginState);
			var return_state = LoginStateOBJ.value;
		}
		else {
			try {
				var LoginStateOBJ = { state: "LoggedIn", value: false };
				app.SaveJson("LoginState",JSON.stringify(LoginStateOBJ),LoginStateFile);
				var return_state = LoginStateOBJ.value;
			} catch (err){ app.Error(err, 0, "App.States.js", true); }
		}
	return return_state;
}


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//8/
//
//
//