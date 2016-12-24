
myTable = new Array(	// リンク先の登録
"http://www.dominos.jp/order/pizza/detail/99999/19001/241",	// ドミノ・ピザ
"http://www.dominos.jp/order/pizza/detail/99999/19001/238",	
"http://www.dominos.jp/order/pizza/detail/99999/19001/208",
"http://www.dominos.jp/order/pizza/detail/99999/19001/531",
"http://www.dominos.jp/order/pizza/detail/99999/19001/97",
"http://www.dominos.jp/order/pizza/detail/99999/19001/217",
"http://www.dominos.jp/order/pizza/detail/99999/19001/95",
"http://www.dominos.jp/order/pizza/detail/99999/19001/532",
"http://www.dominos.jp/order/pizza/detail/99999/19001/238",
"http://www.dominos.jp/order/pizza/detail/99999/19001/129", // ドミノ・ピザここまで
"https://www.pizza-la.co.jp/Item.aspx?id=0004965&ListId=pizza",	// ピザーラ
"https://www.pizza-la.co.jp/Item.aspx?id=0005571&ListId=pizza", 
"https://www.pizza-la.co.jp/Item.aspx?id=0004536&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0004546&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0004534&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0005100&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0004575&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0005184&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0005416&ListId=pizza",
"https://www.pizza-la.co.jp/Item.aspx?id=0005184&ListId=pizza",	// ピザーラここまで
"https://pizzahut.jp/pc/pizza/W00001N14V-002",	// ピザハット
"https://pizzahut.jp/pc/pizza/W00001N11V-002",
"https://pizzahut.jp/pc/pizza/W000002638-002",
"https://pizzahut.jp/pc/pizza/W000002878-002",
"https://pizzahut.jp/pc/pizza/W000002674-002",
"https://pizzahut.jp/pc/pizza/W000003010-002",
"https://pizzahut.jp/pc/pizza/W000002378-002",
"https://pizzahut.jp/pc/pizza/W000002680-002",
"https://pizzahut.jp/pc/pizza/W000001118-002" // ピザハットここまで
);	
function myRndLink(){	// 適当に選んでリンクする関数
     myRnd = Math.floor( Math.random() * myTable.length );	// 0～(URLの数-1)の乱数を求める
     window.open(myTable[myRnd]);	// 窓化
}
