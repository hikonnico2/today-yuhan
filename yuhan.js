
myTable = new Array(	// リンク先の登録
"http://www.dominos.jp/order/pizza/detail/99999/19001/241",	// ドミノ・ピザ
"http://www.dominos.jp/order/pizza/detail/99999/19001/238",	// ドミノ・ピザ
"https://www.pizza-la.co.jp/Item.aspx?id=0004965&ListId=pizza",	// ピザーラ
"https://www.pizza-la.co.jp/Item.aspx?id=0005184&ListId=pizza",	// ピザーラ
"https://pizzahut.jp/pc/pizza/W00001N14V-002",	// ピザハット
"https://pizzahut.jp/pc/pizza/W000001118-002" // ピザハット
);	
function myRndLink(){	// 適当に選んでリンクする関数
     myRnd = Math.floor( Math.random() * myTable.length );	// 0～(URLの数-1)の乱数を求める
     window.open(myTable[myRnd]);	// 窓化
}
