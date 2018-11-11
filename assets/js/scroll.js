---
---
$(window).scroll(function() {
	var windowHeight = $(window).height(),
	windowScroll = $(this).scrollTop(),
	buffer=0;

	var contactForm = $('.index-contact-form').offset().top;
	console.log((contactForm-windowHeight), windowScroll);
	if (windowScroll-buffer > (contactForm-windowHeight)){	
		$('.index-contact-form').animate({
			"opacity": "1",
			"margin-top": "0px",
			"margin-bottom": "0px"
			}, 500);
	}
	
	{% for skills in site.data.settings.skills %}
		var skillsBar{{ skills.title | slugify }} = $('.skill-icons-{{ skills.title | slugify }}').offset().top;
		console.log((skillsBar{{ skills.title | slugify }}-windowHeight), windowScroll);
		if (windowScroll-buffer > (skillsBar{{ skills.title | slugify }}-windowHeight)){
			moveSkillBar('.skill-icons-{{ skills.title | slugify }}');
		}
	{% endfor %}

   });   
   
   
function moveSkillBar(skillsToMove) {
	$(skillsToMove).animate({
		"margin-left": "0px"
		}, 500);
}