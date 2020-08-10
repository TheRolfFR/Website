
function showModal(ModalID, ImgID, ModalImgID, TextureName, SpanID){
	var modal = document.getElementById(ModalID);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(ImgID);
	var modalImg = document.getElementById(ModalImgID);
	var captionText = document.getElementById(TextureName);

	var btn = document.createElement("A");
	btn.innerHTML = "See on GitHub";
	btn.classList.add("btn","btn-info","btn-modal");

	var str = TextureName;
	var n = str.indexOf("/")

	// is a block textures
	if (n === -1){
		btn.setAttribute('href', "https://github.com/Faithful-Dungeons/Resource-Pack/blob/master/Block%20Textures/" + TextureName);
	}
	// isn't it
	else {
		btn.setAttribute('href', "https://github.com/Faithful-Dungeons/Resource-Pack/blob/master/UE4Project/" + TextureName);
	}

	

	btn.setAttribute('target', "_blank");

	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	  modal.appendChild(btn);
	}

	var span = document.getElementById(SpanID);

	// When the user clicks on <span> (x), close the modal
	span.onclick = function(){
		modal.style.display = "none"
	}
}