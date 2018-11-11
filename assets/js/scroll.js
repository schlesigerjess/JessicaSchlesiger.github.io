---
---
$(window).scroll(function() {
	var windowHeight = $(window).height(),
	windowScroll = $(this).scrollTop(),
	buffer=50;
	
	{% for skills in site.data.settings.skills %}
		var skillsBar{{ skills.title | slugify }} = $('.skill-icons-{{ skills.title | slugify }}').offset().top;
		console.log((skillsBar{{ skills.title | slugify }}-windowHeight) , windowScroll);
		
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