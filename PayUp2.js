//code by Isaac Schlaht

app.Script("App.Global-Vars.js");
app.Script("./App.Components.js");
app.Script("./App.Modules.js");
app.Script("./App.States.js");
app.Script("App.Index.LoggedOut.js");
app.Script("App.DB.System.js");
app.Script( "DEV.Admin.js" )

//app.Script("./FileSystem.js");
var LOGGEDIN;
//——————————————————————————————————————————
//——————————————————————————————————————————
function OnStart() {
var dir = app.GetDatabaseFolder();
app.Alert( dir )
	var State = new AppState();

	main_lay = app.CreateLayout("Linear", "VTop, FillXY");
	
//———————————————————————————————————————
	AppState_Layout = app.AddLayout(main_lay, "Linear", "VCenter", "FillXY");
	AppState_Layout.SetSize(1.0, 1.0);
//	AppState_Layout.SetBackColor("#00000000");
	AppState_Layout.SetBackGradient(BGC1, WBGC1,null,"top-bottom" )
//Add layout to app.——————————————————————————————
	app.AddLayout(main_lay);
	State.NavRouter(AppState_Layout)
}//-----OnStart----END

//——————————————————————————————————————————
//——————————————————————————————————————————
//——————————————————————————————————————————
//——————————————————————————————————————————
//——————————————————————————————————————————          