// JavaScript Document
window.addEventListener('load', onVrViewLoad)
function onVrViewLoad() {
	var vrView = new VRView.Player('#vrview', {
   	width: '35%',//横幅の指定
	height: 250,//高さの指定
	image: 'img/1_Production_content.JPG',
	is_stereo: false //stereo画像を指定の場合はこれを指定。Monoの場合は不要
	});
}