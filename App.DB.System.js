
const DatabaseName = "PayUpDatabase";
const User_Accounts_TableColums = "id integer primary key, Username	text, Name text, Password text, CreationDate text";

function PU_Database() {

	try {
		var db = app.OpenDatabase(DatabaseName);
		try {
			db.ExecuteSql("CREATE TABLE IF NOT EXISTS User_Accounts" +
				"("+User_Accounts_TableColums+")", [],
				function (data) {
					OnSuccDebug("Came From Init::: CREATE TABLE;;; User_Accounts... ", data)//check and remove after debug
				}, OnErr);
		} catch (err) { app.Error("Database Table \"User_Accounts\"  could not be created with Error: " + err + "...", 10, "App.DB.System.js", true) }
	} catch (err) { app.Error("Database Failed to open with Error: " + err + "...", 12, "App.DB.System.js", true) }


	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————                                                                                                                                                                                                        
	this.deletedb = function () {
		try {
			app.DeleteDatabase(DatabaseName)
			app.Alert("successfull delete");
		} catch (err) { app.Alert(err) }
	}
	//————————————————————————————————————————		
	//————————————————————————————————————————		
	//————————————————————————————————————————		
	//————————————————————————————————————————		
	
	this.Login = function(UserName, Password, RememberMe){
		const UserLogin = {
			username : UserName,
			password : GetHash(Password),
			remember_me : RememberMe
		}
		try{   db.ExecuteSql("SELECT * FROM User_Accounts WHERE Username = ? AND Password = ?", [UserLogin.username,UserLogin.password], OnLoginSuccess, OnErr  )}
		    catch(err){    app.Error("Failed to retrieve users with Error : " + err + "...", 25, "App.DB.System.js", true);    }
	}
	//————————————————————————————————————————		
	//————————————————————————————————————————		
	//————————————————————————————————————————		
	//———————————————————————————————————c—————	
	this.StartCreateUser = function (UserName, Password, Name) {   this.CheckUserExists(UserName, Password, Name);   }
	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————		

	this.CheckUserExists = function (UserName, Password, Name) {
		try {
			db.ExecuteSql("SELECT Username FROM User_Accounts WHERE" + " Username = ?", [UserName],
				function (data) {
					let existing_Accounts = data.rows.length
					FinishUserCreate(existing_Accounts, UserName, Password, Name);
				}, OnErr);
		} catch (err) {   app.Error("Failed to retrieve users with Error : " + err + "...", 25, "App.DB.System.js", true);   }
	}
	//CreateUser Method functions–-----------------------------------------------------
	//CreateUser Method functions–-----------------------------------------------------
	function FinishUserCreate(existing_Accounts, UserName, Password, Name) {
		if (existing_Accounts == 0) {
		  let passHash = GetHash(Password);
		  let creation_date = Date.now();//check====+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			try {    db.ExecuteSql("INSERT INTO User_Accounts (Username, Name, Password,CreationDate) VALUES(?,?,?,?)", [UserName, Name, passHash,creation_date], OnUserInserted, OnErr)}//check Creation date++++++
			  catch (err) {   app.Error("Failed to insert user with ERROR : " + err + "...", 53, "App.DB.System.js", true);   }
		}
		else {
			app.Alert("User already exists on this device. Please choose another Username!");
		}
		//On Seccessful User Insert–---------------------------------------------------------
		//On Seccessful User Insert–---------------------------------------------------------
		function OnUserInserted( data ) {
			;
			//app.SaveJson({userID: data.insertId, creationDate: creation_date}, "App.Data.json");
			app.Alert("Success full insertion Data : " + data.insertId + "...");
		}
	}
	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————
	//————————————————————————————————————————

	function OnLoginSuccess( data ){
				if(data.rows.length == 0){app.ShowPopup("Account not found:")}
					else{app.ShowPopup("Account found : "+data.rows.item(0).Name)}
	}
	

	function GetHash(str) {
		const crypt = app.CreateCrypt();
		let hash = crypt.Hash(str, "md5");
		return hash;
	}

	function OnSuccDebug(bugmsg, data) {
		app.Alert("Successful Query!!! \n Debug Message : " + bugmsg + "|.|.|. \n Server Data : " + data + "|.|.|.");
	}

	function OnErr(data) {
		app.Alert(data)
	}



}//PU_Database() Class-----END