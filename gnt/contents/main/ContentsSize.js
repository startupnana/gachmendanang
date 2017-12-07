// Viewportの幅定義
// ピクセル値（数値のみ）、または、「device-width」を定義します。
// Viewportの幅定義（ＳＭ）

var vpwidth_sm="700";

// Viewportの幅定義（ＰＣ）

var vpwidth_pc="700";

//画面サイズ定義
//数値＋単位（px、%等のcss仕様に従います）
//
//画面サイズ定義（ＳＭ）

var width_sm="700px";
var height_sm="835px";

//画面サイズ定義（ＰＣ）

var width_pc="700px";
var height_pc="474px";

//コンテンツサイズ取得（ＬＭで呼び出し）
var setsize = new Array();
function getContentsSize(){
	var term = getterm();
	if (term == "sm" ){
		setsize[0] = vpwidth_sm;
		setsize[1] = width_sm;
		setsize[2] = height_sm;
	} else if (term == "pc" ){
		setsize[0] = vpwidth_pc;
		setsize[1] = width_pc;
		setsize[2] = height_pc;
	}
	return(setsize);
}
