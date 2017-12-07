function link_p(url,win) {
    win_open=window.open(url, win, 'location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');
    win_open.focus();
}

//表紙　書籍リンク１『マンガでやさしくわかる決算書（JMAM）』
function vjvopen_link1() {
    var url = 'https://jmam.jp/manabi/products/detail.php?product_id=927';
    var win = 'jmam';
    link_p(url, win);
}

//表紙　書籍リンク２『一瞬でわかる決算書の読み方（宝島社MOOK）』
function vjvopen_link2() {
    var url = 'http://saas2.startialab.com/acti_books/1045173808/10560/HTML5/pc.html#/page/1';
    var win = 'jmam';
    link_p(url, win);
}


//101個人情報保護委員会『通則編』
function vjr101_link1() {
    var url = 'http://www.ppc.go.jp/files/pdf/guidelines01.pdf';
    var win = 'jmam';
    link_p(url, win);
}


//101個人情報保護委員会『第三者提供』
function vjr101_link2() {
    var url = 'http://www.ppc.go.jp/files/pdf/guidelines03.pdf';
    var win = 'jmam';
    link_p(url, win);
}

//101個人情報保護委員会『外国提供』
function vjr101_link3() {
    var url = 'http://www.ppc.go.jp/files/pdf/guidelines02.pdf';
    var win = 'jmam';
    link_p(url, win);
}

//101個人情報保護委員会『匿名加工情報』
function vjr101_link4() {
    var url = 'http://www.ppc.go.jp/files/pdf/guidelines04.pdf';
    var win = 'jmam';
    link_p(url, win);
}

