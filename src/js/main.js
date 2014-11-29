$(function() {
    var prefijoLine = 'line://msg/text/';
    var prefijoWhatsapp = 'whatsapp://send?text=';
    var title = document.title;
    var url = document.URL;
    var shareMsg = 'Cáchate esto:';

    $('.line-btn').attr('href', prefijoLine + shareMsg + ' ' + title + ' ' + url);
    $('.whatsapp-btn').attr('href', prefijoWhatsapp + shareMsg + ' ' + title + ' ' + url);
});