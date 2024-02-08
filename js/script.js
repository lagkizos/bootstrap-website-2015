// Carousel

$(function () { $('.carousel').carousel({ interval: 9000 }); });

// Newsletter

$(function () {
    $('.input-group-addon.beautiful').each(function () {

        var $widget = $(this),
            $input = $widget.find('input'),
            type = $input.attr('type');
        settings = {
            checkbox: {
                on: { icon: 'fa fa-check-circle-o' },
                off: { icon: 'fa fa-circle-o' }
            }
        };

        $widget.prepend('<span class="' + settings[type].off.icon + '"></span>');

        $widget.on('click', function () {
            $input.prop('checked', !$input.is(':checked'));
            updateDisplay();
        });

        function updateDisplay() {
            var isChecked = $input.is(':checked') ? 'off' : 'on';

            $widget.find('.fa').attr('class', settings[type][isChecked].icon);

            //Just for display
            isChecked = $input.is(':checked') ? ' not' : '';
            $widget.closest('.input-group').find('input[type="text"]').val('I\'m' + isChecked + ' currently subscribed to newsletter.')
        }

        updateDisplay();
    });
});