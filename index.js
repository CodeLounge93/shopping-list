$(function() {
  $('button[type="submit"]').on('click', event => {
    event.preventDefault();

    if($('input').val() !== '') {
        $('ul').append(`
          <li>
            <span class="shopping-item">${$('input').val()}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        $('input').val('');
    }
  });
   
    $('.shopping-list').on('click', 'button.shopping-item-delete', event => {
        event.currentTarget.closest('li').remove()
    });

    $('.shopping-list').on('click', 'button.shopping-item-toggle', event => {
        
        $(event.currentTarget).parent().siblings('span.shopping-item').toggleClass('shopping-item__checked')
    });
});