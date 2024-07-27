app.Script("App.Global-Vars.js");

var clr = SetTheme("Dark");

function Route_LoggedOut(lay) {
	//app.Alert(color.Dark.btn.a
	var LO_Container = app.AddLayout(lay,"Absolute","FillXY")
		LO_Container.SetSize(1.0,1.0);
		LO_Container.Animate("FadeOut",null,1);
					Create_Admin_Layout(lay);
				var admin_btn = app.AddButton(LO_Container ,"Admin", null,null,"Custom")
						admin_btn.SetStyle( "grey", "black", 30, "lightblue", 1, 1.0);
							admin_btn.SetPosition( 0.76,0.01,0.2, 0.05 );
							admin_btn.SetOnTouch(showdia);
							

		var LoggedOut_Page = app.AddLayout(LO_Container,"Card","VCenter","FillXY");
			LoggedOut_Page.SetPosition(0.1,0.2,0.8,-1);
			LoggedOut_Page.SetSize(0.8,-1);
			LoggedOut_Page.SetCornerRadius(30,"px");
			LoggedOut_Page.SetMargins(0,0,0,0,"px");
			LoggedOut_Page.SetElevation(5,"px");
			var LoggedOut_Tabs = app.CreateTabs("[fa-user],[fa-plus][fa-user],[fa-question]",0.8,-1,"FontAwesome,Fade,NoMargins");
				LoggedOut_Tabs.SetBackColor(BBGC2);
				LoggedOut_Tabs.SetTextSize(30,"ps");
				LoggedOut_Tabs.SetPadding(0,0,0,0);
				LoggedOut_Tabs.SetMargins(0,0,0,0);
//--LoginPage---------------------------------------------------------------------------------------
//--LoginPage---------------------------------------------------------------------------------------
				var tab_one = LoggedOut_Tabs.GetLayout("[fa-user]");
					tab_one.SetBackColor(BGC2);
				
					var Login_Title = app.AddText(tab_one,"Login",-1,-1,"Bold,MonoSpace,FillX");
						Login_Title.SetTextShadow(4,-2,2,Black[0])
						Login_Title.SetTextSize(50,"ps");
						Login_Title.SetTextColor(Blue[0]);
						Login_Title.SetPadding(0,28,0,20,"ps");

					var Login_UN_Input = app.AddTextEdit(tab_one,"SlimmSlimm",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
						Login_UN_Input.SetTextSize(25,"ps");
						Login_UN_Input.SetHint("Username");
						Login_UN_Input.SetPadding(40,40,40,40,"px");

					var Login_PW_Input = app.AddTextEdit(tab_one,"951753.Die",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
						Login_PW_Input.SetTextSize(25,"ps");
						Login_PW_Input.SetHint("Password");
						Login_PW_Input.SetPadding(40,40,40,40,"px");

					var Login_RememberMe = app.CreateCheckBox("Remember Me",0.6,-1,"Right");
						Login_RememberMe.SetMargins(0,24,0,0,"px");
						Login_RememberMe.SetTextColor(blue2);
							tab_one.AddChild(Login_RememberMe);

					var Login_Submit_Btn = app.AddButton(tab_one,"Login",0.6,-1,"Custom");
						Login_Submit_Btn.SetStyle(Blue[0],Blue[1],12,"grey",1,0.1);
						Login_Submit_Btn.SetTextShadow(4,0,0,Black[0])
						Login_Submit_Btn.SetTextSize(30,"ps");
						Login_Submit_Btn.SetMargins(0,40,0,0,"px");
						Login_Submit_Btn.SetPadding(0,40,0,50,"px");
							Login_Submit_Btn.SetOnTouch(_Submit_Login);

					var Login_Message = app.AddText(tab_one,"Login Failed!",0.6,-1,"MonoSpace,Multiline");
						Login_Message.SetTextSize(24,"ps");
						Login_Message.SetTextColor("red");
						Login_Message.SetPadding(0.0,0.01,0.0,0.0 );
			
	Login_UN_Input.Focus();
	Login_Message.Hide();	
	app.SetOnShowKeyboard(KeyboardMoveEl);

	function _Submit_Login(){
		Login_Submit_Btn.Animate("RubberBand",null,500);
		let submited_UN = Login_UN_Input.GetText();
		let submited_PW = Login_PW_Input.GetText();
		let remember_ME = Login_RememberMe.GetChecked();
			if(validateUN(submited_UN) && validatePW(submited_PW)){
				let DB = new PU_Database();
                DB.Login(submited_UN,submited_PW,remember_ME);
				  if(Login_Message.IsVisible()){
					Login_Message.Animate("SlideToTop",null,200);
				}
			}
			else{
				Login_Message.SetText("* Invalid Username/Password!");
				Login_Message.Animate("SlideFromTop",null,200);
			}
	}
//--LoginPage---------------------------------------------------------------------------------------

//-------------------------------------Create Account Page----------------------------------------------------
	//--Create Account Page---------------------------------------------------------------------------------------
//{
	var tab_two = LoggedOut_Tabs.GetLayout("[fa-plus][fa-user]");
		tab_two.SetBackColor(WBGC1);
		var CreateAcc_Title = app.AddText(tab_two,"Create Account",-1,-1,"MonoSpace,FillX");
			CreateAcc_Title.SetTextShadow(6,-2,2,"black")
			CreateAcc_Title.SetTextSize(50,"ps");
			CreateAcc_Title.SetTextColor(blue1);
			CreateAcc_Title.SetPadding(0,28,0,20,"ps");

		var CreateAcc_UN_Input = app.AddTextEdit(tab_two,"",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
			CreateAcc_UN_Input.SetTextSize(25,"ps");
			CreateAcc_UN_Input.SetHint("Username");
			CreateAcc_UN_Input.SetPadding(40,40,40,40,"px");
				CreateAcc_UN_Input.Focus();

		var CreateAcc_NN_Input = app.AddTextEdit(tab_two,"",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
			CreateAcc_NN_Input.SetTextSize(25,"ps");
			CreateAcc_NN_Input.SetHint("Name or Nickname");
			CreateAcc_NN_Input.SetPadding(40,40,40,40,"px");
				CreateAcc_NN_Input.Focus();

		var CreateAcc_PW_Input = app.AddTextEdit(tab_two,"",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
			CreateAcc_PW_Input.SetTextSize(25,"ps");
			CreateAcc_PW_Input.SetHint("Password");
			CreateAcc_PW_Input.SetPadding(40,40,40,40,"px");


		var CreateAcc_PWConfirm_Input = app.AddTextEdit(tab_two,"",0.6,-1,"AutoSelect,Left,NoSpell,SingleLine");
			CreateAcc_PWConfirm_Input.SetTextSize(25,"ps");
			CreateAcc_PWConfirm_Input.SetHint("Confirm Password");
			CreateAcc_PWConfirm_Input.SetPadding(40,40,40,40,"px")

		var CreateAcc_Submit_Btn = app.AddButton(tab_two,"Create",0.6,-1,"Custom");
			CreateAcc_Submit_Btn.SetStyle(Blue[0],Blue[1],12,"grey",1,0.6);
			CreateAcc_Submit_Btn.SetTextShadow(4,0,0,Black[0])
			CreateAcc_Submit_Btn.SetTextSize(30,"ps");
			CreateAcc_Submit_Btn.SetMargins(0,40,0,0,"px");
			CreateAcc_Submit_Btn.SetPadding(0,40,0,50,"px")
			CreateAcc_Submit_Btn.SetOnTouch(CreateAcc_Submit_Btn_OnTouch)
				app.ShowKeyboard(CreateAcc_UN_Input);

		var Req_Nav_Button = app.AddButton(tab_two,"View Requirements...",0.6,-1,"Custom")
			Req_Nav_Button.SetStyle(WBGC2,WBGC1,12,blue1,0,1.0);
			Req_Nav_Button.SetTextSize(14,"ps")
			Req_Nav_Button.SetPadding(50,0,50,5,"px")
			Req_Nav_Button.SetMargins(0.0,0.03,0.0,0.01)
				Req_Nav_Button.SetOnTouch(function () { Req_Nav_Button.Animate("RubberBand"); LoggedOut_Tabs.ShowTab("[fa-question]"); })


		var tab_three = LoggedOut_Tabs.GetLayout("[fa-question]");
		tab_three.SetBackColor("black");

	LoggedOut_Page.AddChild(LoggedOut_Tabs);
	LO_Container.Animate("ZoomInTop",null,2500);


	function CreateAcc_Submit_Btn_OnTouch() {
		var Username = CreateAcc_UN_Input.GetText();
		var Password = CreateAcc_PW_Input.GetText();
		var Name = CreateAcc_NN_Input.GetText();
		var PWConfirm = CreateAcc_PWConfirm_Input.GetText()
		CreateAcc_Submit_Btn.Animate("RubberBand",null,500)
		if (validateUN(Username) && validatePW(Password)) {
			if (Password == PWConfirm) {
				let  DB = new PU_Database();
				DB.StartCreateUser(Username,Password,Name);
			}
			else {	app.ShowPopup("Passwords do not match...");	}			
		}else{	CreateAccountTermsDialog();	}
	}

	function validateUN(UN) {
		let regex = /^(?=.*[a-zA-Z]{3,})[a-zA-Z0-9_]{6,30}$/;
		let valid = (regex.test(UN) ? true : false);
		return valid;
	}
	function validatePW(PW) {
		let regex = /^(?=.*\d)(?=.*[.,?-_+=!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
		let valid = (regex.test(PW) ? true : false);
		return valid;
	}

	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	function CreateAccountTermsDialog() {
		var CATD = app.CreateDialog("Account Creation Failed","Old");
		CATD.SetTitleTextSize(30,"ps");
		var DLay = app.CreateLayout("Linear","Center,FillXY");
		DLay.SetPadding(8,22,8,32,"px");
		var DTxt = app.AddText(DLay,"Requirements not met! Please check help tab for details..","Multiline,Left");
		DTxt.SetSize(0.75,0.04);
		DTxt.SetTextSize(16,"ps");
		DTxt.SetPadding(0,20,0,32,"px");
		var DButton = app.AddButton(DLay,"View Requirements...",-1,-1,"Custom");
		DButton.SetStyle(BBGC1,BBGC2,20,blue1,1,0.2);
		DButton.SetTextSize(20,"ps");
		DButton.SetPadding(50,0,50,16,"px");
		DButton.SetOnTouch(function () { DLay.Animate("RubberBand",function () { CATD.Hide(); LoggedOut_Tabs.ShowTab("[fa-question]") },500) });
		CATD.AddLayout(DLay)
		CATD.Show();
	}//---Function CreateAccountTermsDialoge----END

	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	var slide = { x: 0.1,y: 0.0,w: 0.8,h: 0.62 }
	slide.dur = 850;
	function KeyboardMoveEl() {//////////////////////////////////////////////////
		if (app.IsKeyboardShown()) {
			slide.y = 0.02;
			LoggedOut_Page.Tween(slide,slide.dur,"Bounce.Out",0,false,null)	//-
		}
		else {
			slide.y = 0.2;
			LoggedOut_Page.Tween(slide,slide.dur,"Bounce.Out",0,false,null)
		}
	}//KeyBoardMoveEl Function----END////////////////////////////////////////
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------
	//	-------------------------------------------------------------------------------



	function showdia(){
		adminDialog.Show();
	}
}