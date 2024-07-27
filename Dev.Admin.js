var tablelist = new Array();


function Create_Admin_Layout(){
// var tablelist = [];

var  dbt = app.OpenDatabase( DatabaseName );
				dbt.ExecuteSql("SELECT * From sqlite_master", [], ShowTables, OnEr);


						var  adminDialog = app.CreateDialog("Admin panel", null);
		var adminLay = app.CreateLayout("Linear","VCenter",1.0,1.0,"FilXY");

		adminDialog.AddLayout(adminLay);
		adminDialog.Show();


function ShowTables(data){
	let len = data.rows.length;
	let s = " ";
	let tablelist = [];
		for(let i = 0; i < len; i++){
			tablelist.push(data.rows.item(i).tbl_name);
		}
	var tables  = app.AddList(adminLay,tablelist,0.8,0.4, null, null);
	tables.SetOnTouch(table_ontouch);
}

function table_ontouch(title, body, type, index ){
	dbt.ExecuteSql("SELECT * From "+title, [], ShowTablestwo, OnEr);
}

function ShowTablestwo(data){
	let len = data.rows.length;
	let i =0;
	let s = " ";
	tablelist = [];
		for(i; i < len; i++){
			tablelist.push(JSON.stringify(data.rows.item(i)));
		}
	var tables  = app.AddList(adminLay,tablelist,0.8,0.4, null, null);
	tables.SetOnTouch(table_ontouch);
}

 //TablesDialog.Show();
function OnEr(data){
       app.Alert( data )
}


}