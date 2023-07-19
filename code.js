jQuery(document).ready(function($) {
    $('#form-field-mySelects').select2({
      placeholder: "Select something",
      escapeMarkup: function(markup) {
        return markup;
      },
      templateResult: formatDesign,
      templateSelection: formatDesign 
    });
  });

  function formatDesign(item) {
    if (!item.id) {
      return item.text;
    }
    var selectionText = item.text.split(".");
    var $returnString = selectionText[0] + "<br>" + selectionText[1];
    return $returnString;
  }
