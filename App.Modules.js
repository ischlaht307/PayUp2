

function CreateAppbar() {
	appBar = app.AddLayout(main_lay, "Linear", "Horizontal", "FillX");
		appBar.SetBackColor(AppBar_BG_Color);
		appBar.SetSize(1.0, Appbar_height);
		appBar.SetElevation(20, "ps");
		appBar.SetGravity("left");
		appBar.SetPadding(0,0,0,0);
		appBar.SetMargins(0,0,0,0);
	
	appBar_menuButton = app.AddButton(appBar,Drawer_icon, -1, -1, "FillY, FontAwesome");
		appBar_menuButton.SetTextColor(TXTC1);
		appBar_menuButton.SetBackColor(AppBar_BG_Color);
		appBar_menuButton.SetOnTouch(appBar_menuButton_OnTouch);
		appBar_menuButton.SetTextSize(70, "ps");

	appBar_Title = app.AddText(appBar, App_Title, 0.5, 0.07, "Left, VCenter, Bold");
		appBar_Title.SetTextColor("white");
		appBar_Title.SetPadding(20, 0, 0, 0, "ps")
		appBar_Title.SetTextSize(50, "ps")

	function appBar_menuButton_OnTouch() {
		if (app.GetDrawerState() == "Closed") { app.OpenDrawer("Left"); }
		else { app.CloseDrawer() ;}
	}
}



//var drawerLayout, drawerTitle, drawerDiv_one, ranbtn;
function CreateDrawer() {
var	drawerLayout = app.CreateLayout("Linear", "FillXY", "VCenter");
	drawerLayout.SetBackColor(Drawer_BGColor);
	//-------Drawer Title-------
var	drawerTitle = app.AddText(drawerLayout, "Menu", 1.0, 0.08, "underlined");
	drawerTitle.SetTextSize(40);
	drawerTitle.SetTextColor("#000000");

	//-------Drawer Divider -------
var	drawerDiv_one = app.AddLayout(drawerLayout, "Linear", "FillY", "VCenter");
	drawerDiv_one.SetSize(0.5, 0.002);
	drawerDiv_one.SetBackColor("#C9C9C9");
	drawerDiv_one.SetMargins(0.1, 0.0, 0.1, 0.0);

var	homebtn = app.AddButton(drawerLayout, "Home", 0.55, 0.06, "Custom")
	homebtn.data.myid = "homebutton";
	homebtn.SetStyle(BBGC1, BBGC1,20, "#00000000", 0, 0.3)
	homebtn.SetTextSize(32)
	homebtn.SetMargins(0.01, 0.01, 0.01, 0.00);
	//homebtn.SetOnTouch( btn_OnTouch_Home )

var	aboutbtn = app.AddButton(drawerLayout, "About", 0.55, 0.06, "Custom");
	aboutbtn.SetStyle(BBGC2, BBGC2, 10, "#FF000000", 2, 1.0)
	aboutbtn.SetTextSize(32)
	aboutbtn.SetMargins(0.01, 0.01, 0.01, 0.02)
	aboutbtn.SetTextSize(32)
//	aboutbtn.SetOnTouch(btn_OnTouch_About)
	// ---init drawer
	app.AddDrawer(drawerLayout,Drawer_side,Drawer_width);


}