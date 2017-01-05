$(function() {
  $('[data-toggle="tooltip"]').tooltip();

  $.get('https://api.github.com/repos/dixso/custombox/releases/latest').done(function(response) {
    if (response && response.tag_name) {
      $(document.getElementById('download')).prop('href', 'https://github.com/dixso/custombox/archive/' + response.tag_name + '.zip');
    }
  });

  $(document).on('click', '[data-custombox]', function() {
    var options = $(this).data('custombox');
    if (!options.content.target) {
      options.content.target = '#demo-modal';
    }

    new Custombox.modal(options).open();
  });
});