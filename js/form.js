$(document).ready(function ()
{
	jQuery.validator.addMethod("isValidNumber", function(value, element, options) 
	{
		return isSameDigit(element.value);
	}, "");
	
	jQuery.validator.addMethod("isValidName", function(value, element)
	{
		return this.optional(element) || /^[a-z áéíóúüñ]+$/i.test(value);
	}, "");
	
	
	$("form").validate(
	{
		rules: 
		{
            phone: 
			{
                required: true,
                minlength: 8,
                maxlength: 8,
                isValidNumber: $(this),
                digits: true
            },
			fullname:
			{
				required: true,
                minlength: 5,
                maxlength: 200,
                isValidName: $(this),
                digits: false
			}
        },
        messages: {
            phone: "<br>Ingresa un número de teléfono válido.",
			fullname: "<br>Ingresa un nombre válido",
        },
		submitHandler: function(form) 
		{
			var formData = 
			{
				fullname: $("#fullname").val(),
				chat_id: $("#chat_id").val(),
				phone: $("#phone").val(),
			};
			
			$.ajax({
				type: "POST",
				url: "http://localhost/flappy-cubird/request_handler.php",
				data: formData,
				dataType: "json",
				encode: true,
			}).done(function (data)
			{
				if (!data.success) 
				{
					$("#server_response").html(
						'<div>' + data + "</div>"
					);
				}
				else
				{
					$(".form_holder").hide();
				}
			});
			event.preventDefault();
		}
	})
});

function isSameDigit(phoneNumber)
{
	var firstDigit = phoneNumber.substring(0, 1);
	var phoneNumberArray = Array.from(phoneNumber);
	
	var count = 0;
	for (var i = 0; i < phoneNumberArray.length; i++)
	{
		if (phoneNumberArray[i] == phoneNumberArray[i + 1]) 
		{
			count++;
		}
	}

	if (firstDigit === '6' || firstDigit === '7')
	{
		return (count != 7);
	} 
	else 
	{
		return false;
	}
}
