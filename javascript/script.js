(function() {
  $(function() {
    var $originalElement, deferredFade;
    deferredFade = $('#content').fadeIn();
    $originalElement = $('.blog-original');
    if ($originalElement.length > 0) {
      $.jGFeed("http://blog.derrickko.com/feed", function(feeds) {
        var entry, originalText, title, url;
        if (!feeds) {
          $('.blog-placeholder').fadeIn('fast');
          return false;
        }
        entry = feeds.entries[0];
        url = entry.link;
        title = entry.title;
        $originalElement = $('.blog-original');
        originalText = $originalElement.html().replace('url', url).replace('{{title}}', title);
        $originalElement.html(originalText);
        return $.when(deferredFade).then(function() {
          return $originalElement.fadeIn('slow');
        });
      }, 1);
    }
    return $('#content h2').fadeTo(10000, 0.3);
  });

}).call(this);
