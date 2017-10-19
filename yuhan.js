
myTable = new Array(	// リンク先の登録
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1609",	// ドミノ・ピザ
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1634",	
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1635",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1604",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1607",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1608",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1617",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1619",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1622",
  "http://www.dominos.jp/order/pizza/detail/99999/19001/1624", // ドミノ・ピザここまで
  "https://www.pizza-la.co.jp/Item.aspx?id=0006148&ListId=pizza",	// ピザーラ
  "https://www.pizza-la.co.jp/Item.aspx?id=0006149&ListId=pizza", 
  "https://www.pizza-la.co.jp/Item.aspx?id=0006150&ListId=pizza",
  "https://www.pizza-la.co.jp/Item.aspx?id=0006126&ListId=pizza",
  "https://www.pizza-la.co.jp/Item.aspx?id=0005987&ListId=pizza",
  "https://www.pizza-la.co.jp/Item.aspx?id=0006062&ListId=pizza",// ピザーラここまで
  "https://pizzahut.jp/pc/pizza/W000002916-002",	// ピザハット
  "https://pizzahut.jp/pc/pizza/W000003714-002",
  "https://pizzahut.jp/pc/pizza/W000003295-002",
  "https://pizzahut.jp/pc/pizza/W00001N19V-002",
  "https://pizzahut.jp/pc/pizza/W000002379-002",
  "https://pizzahut.jp/pc/pizza/W000001611-002",
  "https://pizzahut.jp/pc/pizza/W000001071-002",
  "https://pizzahut.jp/pc/pizza/W000002915-002",
  "https://pizzahut.jp/pc/pizza/W000002674-002", // ピザハットここまで
);	
function myRndLink(){	// 適当に選んでリンクする関数
     myRnd = Math.floor( Math.random() * myTable.length );	// 0～(URLの数-1)の乱数を求める
     window.open(myTable[myRnd]);	// 窓化
}
