
//Colors–---------------------------------------------------------------------------
var white1, white2,
	black1, black2,
	blue1, blue2, blue3,
	BGC1, BGC2,
	WBGC1, WBGC2,
	BBGC1, BBGC2,
	TXTC1, TXTC2, TXTC3;

//-Simple color names —————————————————————————
white1 = "#FFFFFFFF";
white2 = "#FFE2E2E2";
White = [white1, white2];
black1 = "#FF000000";
black2 = "#FF292929";
Black = [black1, black2];
blue1 = "#FF3193FF";
blue2 = "#FF0077FF";
blue3 = "#FF0068D0";
Blue = [blue1, blue2, blue3];
//Gradients- Colors
BlueGrad = [blue1, white1];
//	BackGround-Colors#——————————————————————————
BGC1 = "#FF555555";
BGC2 = "#FF6D6D6D";
BGC = [BGC1, BGC2];
//	Window-BackGround-Colors#—————————————————————
WBGC1 = "#FF333333";
WBGC2 = "#FF949494";
WBGC = [WBGC1, WBGC2];
//	Button-BackGround-Colosr#——————————————————————
BBGC1 = "#FF8D8D8D";
BBGC2 = "#A0484848";
BBGC = ["#FF8D8D8D", "#A0484848"];
//	Text-Colors#——————————————————————————————
TXTC1 = white1;
TXTC2 = black1;
TXTC3 = blue1;
//————————————————————————————————————
var color = {
							Blue: {
													a: "#FF3193FF",
													b: "#FF0077FF",
													c: "#FF0068D0",
														g: [this.Blue.a, this.Blue.b]
								},
								White: {
													a: "#FFFFFFFF",
													b: "#FFE5E5E5",
													g: [this.White.a, this.White.b]
									},
									Black: {
		a: "#FF000000",
		b: "#FF292929",
		g: [this.Black.a, this.Black.b]
									},
									Dark: {
		theme: "Dark",
										btn: {
			a: "#FF8D8D8D",
			b: "#A0484848",
											grad: {
				a: [this.Dark.btn.a, this.Dark.btn.b],
				b: [this.Blue.a, this.Blue.b]
			}
		},
										bg: {
			a: "#FF555555",
			b: "#FF6D6D6D",
											grad: {
				a: [this.Dark.bg.a, this.Dark.bg.b],
				b: [this.Black.b, this.Dark.bg.a]
			}
		},
										win: {
			a: "#FF333333",
			b: "#FF949494",
											grad: {
				a: [this.Dark.win.a, this.Dark.win.b],
				b: [this.Blue.a, this.Dark.win.a]
			}
		},
		txt: {
			we: "#FFFFFFFF",
			bk: "#FF000000",
			be: this.Blue.a
		},
	},
									Light: {
										btn: {
			a: "light",
			b: BBGC[1],
											grad: {
				a: [BBGC[0], BBGC[1]],
				b: [Blue[0], Blue[1]]
											}
		},
		bg: {
			a: BBGC[0],
			b: BBGC[1],
			grad: {
				a: [BBGC[0], BBGC[1]],
				b: [Blue[0], Blue[1]]
			}
		},
		win: {
			a: BBGC[0],
			b: BBGC[1],
			grad: {
				a: [BBGC[0], BBGC[1]],
				b: [Blue[0], Blue[1]]
			}
		}
	}
}
// var clr = SetTheme("Dark");//
//var clr.mode = Dark;
//app.Alert(clr);

function SetTheme(theme) {
	let colorSet = (theme == 'Dark' ? color.Dark : color.Light);
	return colorSet;
}
///app.Alert(JSON.stringify(clr));

//Components-----------------------------------------------------------------

var
	App_Title,
	AppBar_BG_Color,
	Drawer_icon,
	Drawer_BGColor,
	Appbar_height,
	Heading_textsize,
	Info_textsize,
	Buttons_radius,
	Cards_radius,
	Drawer_width,
	Drawer_side;


AppBar_BG_Color = BGC1;
Drawer_BGColor = WBGC1;
App_Title = "PayUp";
Drawer_icon = "[fa-th-list]";
Appbar_height = 0.07;
Heading_textsize = 40, "ps";
Info_textsize = 18, "ps";
Buttons_radius = 10, "ps";
Cards_radius = 20, "ps";
Drawer_width = 0.6;
Drawer_side = "Left";









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
//
//
//
//